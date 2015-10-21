from django.db import models

from libraries.models import Dictable


class Page(Dictable):

    dom_class = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    template = models.CharField(max_length=255)
    in_menu = models.BooleanField(default=True)

    def __str__(self):
        return self.name;