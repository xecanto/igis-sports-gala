from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from .models import CustomUser
from .serializers import UserSerializer, RegisterSerializer

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer

class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"})
        return Response({"error": "Invalid credentials"}, status=400)

class ProfileView(generics.RetrieveUpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
