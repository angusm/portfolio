from django.db import models

from libraries.models import Dictable


class ProjectType(Dictable):

    template = models.CharField(max_length=255)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
