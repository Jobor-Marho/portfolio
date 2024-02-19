from django.urls import path
from .views import IndexView, contact

app_name = 'basicapp'

urlpatterns = [
    path('', IndexView.as_view(), name='home'),
    path('success/', contact, name='contact')
]