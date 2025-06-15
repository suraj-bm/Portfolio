from django.shortcuts import render
# views.py
from django.http import HttpResponse, FileResponse
import os
from django.conf import settings

def download_resume(request):
    # Path to the resume file
    file_path = os.path.join(settings.STATICFILES_DIRS[0], 'SurajBmCV1.pdf')
    
    # Open the file and serve it as a response
    if os.path.exists(file_path):
        with open(file_path, 'rb') as file:
            response = HttpResponse(file.read(), content_type='application/pdf')
            response['Content-Disposition'] = 'attachment; filename="SurajBmCV1.pdf"'
            return response
    else:
        return HttpResponse("File not found.", status=404)

# Create your views here.
def index(request):
    return render(request,"index2.html")