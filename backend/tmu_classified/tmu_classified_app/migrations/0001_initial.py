# Generated by Django 5.0.4 on 2024-04-04 06:47

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ad',
            fields=[
                ('ad_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='Ad ID')),
                ('title', models.CharField(max_length=200, verbose_name='Title')),
                ('description', models.TextField(verbose_name='Description')),
                ('category', models.CharField(max_length=100, verbose_name='Category')),
                ('sub_category', models.CharField(max_length=100, verbose_name='Sub Category')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Price')),
                ('city', models.CharField(max_length=100, verbose_name='City')),
                ('image', models.ImageField(upload_to='ads/', verbose_name='Image')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('userID', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='User ID')),
                ('email', models.EmailField(max_length=100, unique=True, verbose_name='Email')),
                ('username', models.CharField(max_length=30, unique=True, verbose_name='Username')),
                ('is_admin', models.BooleanField(default=False, verbose_name='Is Admin')),
                ('is_staff', models.BooleanField(default=False, verbose_name='Is Staff')),
                ('is_superuser', models.BooleanField(default=False, verbose_name='Is Superuser')),
                ('groups', models.ManyToManyField(blank=True, related_name='tmu_classified_app_users', to='auth.group')),
                ('user_permissions', models.ManyToManyField(blank=True, related_name='tmu_classified_app_users', to='auth.permission')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UserAdRelation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('ad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tmu_classified_app.ad', verbose_name='Ad')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tmu_classified_app.user', verbose_name='User')),
            ],
            options={
                'unique_together': {('user', 'ad')},
            },
        ),
    ]
