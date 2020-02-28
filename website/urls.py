from django.urls import path
from .import views

urlpatterns = [
    path('', views.index, name='website-home'),
    path('success/', views.successview, name='success'),
]
