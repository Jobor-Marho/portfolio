from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib import messages
import smtplib

# Create your views here.

g_mail = "imlearning862@gmail.com"
yahoo_mail = "imlearning268@yahoo.com"
gmail_password = "wkthkankpzblxvpq"

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
                connection.login(user=g_mail, password=gmail_password)
                connection.sendmail(from_addr=email, to_addrs=g_mail, msg="Subject:New Message"
                                                                        "\n\nSomeone sent you a message\n"
                                                                        f"Name: {str(name).title()}\nEmail: {email}\nMessage: {msg}\n")
                
        except:
            messages.error(request,'Something Went Wrong') 
            return redirect('basicapp:home')
        else:
            messages.success(request,'Frederick Received your Message')
            return redirect('basicapp:home')
