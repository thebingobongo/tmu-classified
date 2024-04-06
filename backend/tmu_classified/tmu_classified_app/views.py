from django.contrib.auth import authenticate, update_session_auth_hash
from django.http import Http404
from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from rest_framework import status, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.generics import DestroyAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Ad, UserAdRelation
from .serializers import * 
from django.contrib.auth.hashers import make_password, check_password

# Create your views here.

class LoginView(APIView):
    """
    Login the user with the given username and password.
    """
    @swagger_auto_schema(request_body=LoginSerializer, security=[{'Token': []}], tags=['no_auth'])
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'username': user.username}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Wrong Credentials'}, status=status.HTTP_400_BAD_REQUEST)
        

class LogoutView(APIView):
    """
    Logout the user with the given username and password.
    """
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(security=[{'Token': []}], tags=['needs_auth'])
    def post(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class RegisterView(APIView):
    """
    Register a new user with the given username, email, and password.
    """
    @swagger_auto_schema(request_body=RegisterSerializer, tags=['no_auth'])
    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'username': user.username}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class ChangePasswordView(APIView):
    """
    Change the password of the user.
    """
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=ChangePasswordSerializer, security=[{'Token': []}], tags=['needs_auth'])
    def post(self, request, *args, **kwargs):
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user
            if not user.check_password(serializer.validated_data['old_password']):
                return Response({'error': 'Wrong password'}, status=status.HTTP_400_BAD_REQUEST)
            user.set_password(serializer.validated_data['new_password'])
            user.save()
            update_session_auth_hash(request, user)
            return Response({'message': 'Password successfully updated'}, status=status.HTTP_200_OK)
        

class UserAdView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(security=[{'Token': []}], tags=['needs_auth'])
    def get(self, request):
        user_ad_relations = UserAdRelation.objects.filter(user=request.user)
        serializer = UserAdRelationSerializer(user_ad_relations, many=True)
        return Response(serializer.data)


class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(security=[{'Token': []}], tags=['needs_auth'])
    def get(self, request):
        user = request.user
        serializer = UserInfoSerializer(user)
        return Response(serializer.data)


class AdView(APIView):
    @swagger_auto_schema(
        tags=['no_auth'],
        manual_parameters=[
            openapi.Parameter('num_of_ads', openapi.IN_QUERY, type=openapi.TYPE_INTEGER),
            openapi.Parameter('category', openapi.IN_QUERY, type=openapi.TYPE_STRING),
        ]
    )

    def get(self, request):
        num_of_ads = request.query_params.get('num_of_ads', None)
        category = request.query_params.get('category', None)

        if num_of_ads is not None:
            num_of_ads = int(num_of_ads)
        else:
            num_of_ads = Ad.objects.count()  # default to all ads

        if category is not None:
            ads = Ad.objects.filter(category=category)[:num_of_ads]
        else:
            ads = Ad.objects.all()[:num_of_ads]

        serializer = AdSerializer(ads, many=True)
        return Response(serializer.data)


class GetAdView(APIView):
    @swagger_auto_schema(tags=['no_auth'])
    def get(self, request, ad_id):
        try:
            user_ad_relation = UserAdRelation.objects.get(ad__ad_id=ad_id)
        except UserAdRelation.DoesNotExist:
            return Response({'error': 'Ad not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = SingleAdSerializer(user_ad_relation)
        return Response(serializer.data)



class SearchView(APIView):
    @swagger_auto_schema(
        tags=['no_auth'],
        manual_parameters=[
            openapi.Parameter('search', openapi.IN_QUERY, type=openapi.TYPE_STRING),
            openapi.Parameter('category', openapi.IN_QUERY, type=openapi.TYPE_STRING),
            openapi.Parameter('sub_category', openapi.IN_QUERY, type=openapi.TYPE_STRING),
            openapi.Parameter('city', openapi.IN_QUERY, type=openapi.TYPE_STRING),
            openapi.Parameter('min_price', openapi.IN_QUERY, type=openapi.TYPE_NUMBER),
            openapi.Parameter('max_price', openapi.IN_QUERY, type=openapi.TYPE_NUMBER),
        ]
    )
    def get(self, request):
        search_string = request.query_params.get('search', None)
        category = request.query_params.get('category', None)
        sub_category = request.query_params.get('sub_category', None)
        city = request.query_params.get('city', None)
        min_price = request.query_params.get('min_price', None)
        max_price = request.query_params.get('max_price', None)

        q_objects = Q()

        if search_string is not None:
            q_objects &= Q(title__icontains=search_string) | Q(description__icontains=search_string) | Q(sub_category__icontains=search_string)
        if category is not None:
            q_objects &= Q(category__iexact=category)
        if sub_category is not None:
            q_objects &= Q(sub_category__iexact=sub_category)
        if city is not None:
            q_objects &= Q(city__iexact=city)
        if min_price is not None:
            q_objects &= Q(price__gte=min_price)
        if max_price is not None:
            q_objects &= Q(price__lte=max_price)

        print(q_objects)  # Print the query
        ads = Ad.objects.filter(q_objects)
        print(ads)  # Print the results
        serializer = AdSerializer(ads, many=True)
        return Response(serializer.data)


class PostAdView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=PostAdSerializer, security=[{'Token': []}], tags=['needs_auth'])
    def post(self, request):
        serializer = PostAdSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            ad = serializer.save()
            return Response({"ad_id": ad.ad_id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DeleteAdView(DestroyAPIView):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            'ad_id': openapi.Schema(type=openapi.TYPE_STRING, description='UUID of the Ad'),
            'username': openapi.Schema(type=openapi.TYPE_STRING, description='Username of the User'),
        }
    ), responses={200: 'Ad deleted', 403: 'Forbidden', 404: 'Not found'}, tags=['needs_auth'])
    def delete(self, request, *args, **kwargs):
        ad_id = request.data.get('ad_id')
        username = request.data.get('username')

        user = User.objects.filter(username=username).first()
        if not user or request.user != user:
            return Response(status=status.HTTP_403_FORBIDDEN)

        ad = Ad.objects.filter(ad_id=ad_id).first()
        if not ad:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user_ad_relation = UserAdRelation.objects.filter(user=user, ad=ad)
        if not user_ad_relation.exists():
            return Response(status=status.HTTP_403_FORBIDDEN)

        ad.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)