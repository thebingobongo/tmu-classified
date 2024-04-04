from django.contrib import admin
from .models import User, Ad, UserAdRelation

# Register your models here.

admin.site.register(User)
admin.site.register(Ad)
admin.site.register(UserAdRelation)