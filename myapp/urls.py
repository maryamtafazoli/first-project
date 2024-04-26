from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('login/', views.user_login, name='login'),
    path('index/', views.user_login, name='index'),

    # path('signup/', views.user_signup, name='signup'),
    path('logout/', views.user_logout, name='logout'),
    path('error_page/', views.error_page, name='error_page'),
]