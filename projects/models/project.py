from django.db import models

from libraries.models import Dictable
from project_photo import ProjectPhoto
from project_style import ProjectStyle
from project_type import ProjectType


class Project(Dictable):

    name = models.CharField(max_length=255)
    blurb = models.CharField(max_length=255)
    project_style = models.ForeignKey(ProjectStyle)
    project_type = models.ForeignKey(ProjectType)
    project_photo = models.ForeignKey(ProjectPhoto)

    def __str__(self):
        return self.name