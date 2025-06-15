from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index,name="home"),
    path('download-resume/', views.download_resume, name='download_resume')


]
