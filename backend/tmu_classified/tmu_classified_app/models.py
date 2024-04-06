from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
import uuid
from django.db import models

# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError("Users must have a username")
        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None):
        user = self.create_user(
            email='none',
            username=username,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    userID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, verbose_name='User ID')
    email = models.EmailField(verbose_name='Email', max_length=100, unique=True, blank=False, null=False)
    username = models.CharField(verbose_name='Username', max_length=30, unique=True, blank=False, null=False)
    is_admin = models.BooleanField(default=False, verbose_name='Is Admin')
    is_staff = models.BooleanField(default=False, verbose_name='Is Staff')
    is_superuser = models.BooleanField(default=False, verbose_name='Is Superuser')


    USERNAME_FIELD = 'username'

    objects = UserManager()

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True
    

class Ad(models.Model):
    ad_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, verbose_name='Ad ID')
    title = models.CharField(max_length=200, verbose_name='Title')
    description = models.TextField(verbose_name='Description')
    category = models.CharField(max_length=100, verbose_name='Category')
    sub_category = models.CharField(max_length=100, verbose_name='Sub Category')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Price')
    city = models.CharField(max_length=100, verbose_name='City')
    image = models.ImageField(upload_to='ads/', verbose_name='Image', max_length=500)

    def __str__(self):
        return self.title

class UserAdRelation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='User')
    ad = models.ForeignKey(Ad, on_delete=models.CASCADE, verbose_name='Ad')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created At')

    class Meta:
        unique_together = ('user', 'ad')

