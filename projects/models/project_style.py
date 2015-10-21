from django.db import models

from libraries.models import Dictable


class ProjectStyle(Dictable):

    name = models.CharField(max_length=255)
    iconClass = models.CharField(max_length=255)
    arrowClass = models.CharField(max_length=255)
    lineClasses = models.CharField(max_length=255)

    def __str__(self):
        return self.name