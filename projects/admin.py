from django.contrib import admin
from models import Project
from models import ProjectPhoto
from models import ProjectStyle
from models import ProjectType

# Register your models here.
admin.site.register(Project)
admin.site.register(ProjectPhoto)
admin.site.register(ProjectStyle)
admin.site.register(ProjectType)