from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib import messages
from django.conf import settings
import smtplib

# Create your views here.



class IndexView(TemplateView):
    template_name = 'index.html'


    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data()
        context['street'] = 'Before Affisere Secondary School'
        context['location'] = 'Ughelli, Delta State, Nigeria'
        context['phonenum'] = '+234 903 048 0419'
        context['email'] = 'joborfrederick@gmail.com'

        return context

def contact(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        name = request.POST.get('name')
        msg = request.POST.get('msg')

        try:
            with smtplib.SMTP_SSL("smtp.gmail.com") as connection:
                connection.login(user=settings.GMAIL, password=settings.GMAIL_PASSWORD)
                connection.sendmail(from_addr=email, to_addrs=settings.GMAIL, msg="Subject:New Message"
                                                                        "\n\nSomeone sent you a message\n"
                                                                        f"Name: {str(name).title()}\nEmail: {email}\nMessage: {msg}\n")
                
        except:
            messages.error(request,'Something Went Wrong. Please Try Again.') 
            return redirect('basicapp:home')
        else:
            messages.success(request,'Frederick Received your Message and will get back to you Shortly')
            return redirect('basicapp:home')
