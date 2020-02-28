from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail, BadHeaderError


def index(request):
    if request.method == 'POST':
        from_email = request.POST.get("from_email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")
        try:
            send_mail(subject, message, from_email, ['mogononso@gmail.com'], )
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        return redirect('success')
    return render(request, 'home.html')


def successview(request):
    return HttpResponse('Thank you for reaching out!')
