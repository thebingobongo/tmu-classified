from django.contrib import admin
from django.urls import path, include

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from .views import *

admin.site.site_header = "TMUC Admin"
admin.site.site_title = "TMU Classified Admin Portal"
admin.site.index_title = "TMU Classified Admin Portal"

schema_view = get_schema_view(
    openapi.Info(
        title="TMU Classified API",
        default_version='v1',
        description="API documentation for TMU Classified",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),

    path('search/', SearchView.as_view(), name='search'),
    path('ads/', AdView.as_view(), name='ads'),
    path('ads/<uuid:ad_id>/', GetAdView.as_view(), name='get_ad'),
    path('user_info/', UserInfoView.as_view(), name='user_info'),
    path('user_ads/', UserAdView.as_view(), name='user_ads'),
    path('change_password/', ChangePasswordView.as_view(), name='change_password'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='login'),
    path('post_ad/', PostAdView.as_view(), name='post_ad'),
    path('delete_ad/', DeleteAdView.as_view(), name='delete_ad'),
]
