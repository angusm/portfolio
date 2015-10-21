from django.db import models

from libraries.models import Dictable


class ProjectWeb(Dictable):

    name = models.CharField(max_length=255)
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.name
