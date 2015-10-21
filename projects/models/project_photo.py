from django.db import models

from libraries.models import Dictable


class ProjectPhoto(Dictable):

    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.name
