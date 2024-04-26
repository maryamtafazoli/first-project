from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm
from django.contrib.auth.forms import BaseUserCreationForm


# Create your views here.
# Home page
def index(request):
    return render(request, "myapp/index.html")


# signup page
def user_signup(request):
    if request.method == "POST":
        form = BaseUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("login")
        else:
            return render(request, "myapp/error.html", {"error": form.errors})
    else:
        form = BaseUserCreationForm()
    return render(request, "myapp/login.html", {"form": form})


# login page
def user_login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]
            user = authenticate(request, username=username, password=password)
            if user:
                login(request, user)
                return redirect("home")
            else:
                return render(request, "myapp/error.html", {"error": "user doesnt exist"})
        else:
            return render(request, "myapp/error.html", {"error": form.errors})
    else:
        form = LoginForm()

    return render(request, 'login.html', {"form": form})
    


# logout page
def user_logout(request):
    logout(request)
    return redirect("login")


def error_page(request):
    return render(request, "myapp/error.html",{})