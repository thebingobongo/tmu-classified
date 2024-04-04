from rest_framework import serializers
from rest_framework.authtoken.models import Token

from django.contrib.auth import get_user_model

from .models import User, Ad, UserAdRelation

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

    

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user



class AdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ad
        fields = ['ad_id', 'title', 'description', 'category', 'sub_category', 'price', 'city', 'image']


class SingleAdSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Ad
        fields = ['ad_id', 'username', 'title', 'description', 'price', 'city', 'image']


class PostAdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ad
        fields = ['title', 'description', 'category', 'sub_category', 'price', 'city']

    def create(self, validated_data):
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        ad = Ad.objects.create(**validated_data)
        UserAdRelation.objects.create(user=user, ad=ad)
        return ad



class UserAdRelationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    ad = AdSerializer(read_only=True)

    class Meta:
        model = UserAdRelation
        fields = ['user', 'ad']
    
    
    # def get_ads(self, obj):
    #     ads = Ad.objects.filter(useradrelation__user=obj)
    #     return AdSerializer(ads, many=True).data



class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)



class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class EditProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance
    

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'is_admin')
