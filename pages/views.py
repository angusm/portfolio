from django.shortcuts import render
from pages.models import Page
from projects.models import Project

import json

# Create your views here.


def index(request, *args):

    pages = Page.objects.all()
    pages_dict = []
    for page in pages:
        pages_dict.append(page.to_dict())

    data_for_angular = {
        'pages': pages_dict
    }
    context = {
        'data_for_angular': json.dumps(data_for_angular)
    }
    return render(request, 'index.html', context)