from django.contrib import admin
from .models import CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'role')
    search_fields = ('email', 'first_name', 'last_name')
    list_filter = ('is_staff', 'is_active', 'role')
    
