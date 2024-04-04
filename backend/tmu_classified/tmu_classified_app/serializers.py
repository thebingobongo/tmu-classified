from rest_framework import serializers
from rest_framework.authtoken.models import Token

from django.contrib.auth import get_user_model

from .models import User, Ad, UserAdRelation

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['userID', 'email', 'username', 'is_admin', 'is_staff', 'is_superuser']

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user


class AdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ad
        fields = ['ad_id', 'title', 'description', 'category', 'sub_category', 'price', 'city', 'image']


class UserAdRelationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    ad = AdSerializer(read_only=True)

    class Meta:
        model = UserAdRelation
        fields = ['user', 'ad']



class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)



class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)