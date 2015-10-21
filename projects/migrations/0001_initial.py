# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('libraries', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('dictable_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='libraries.Dictable')),
                ('name', models.CharField(max_length=255)),
                ('blurb', models.CharField(max_length=255)),
            ],
            bases=('libraries.dictable',),
        ),
        migrations.CreateModel(
            name='ProjectPhoto',
            fields=[
                ('dictable_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='libraries.Dictable')),
                ('image', models.CharField(max_length=255)),
            ],
            bases=('libraries.dictable',),
        ),
        migrations.CreateModel(
            name='ProjectStyle',
            fields=[
                ('dictable_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='libraries.Dictable')),
                ('iconClass', models.CharField(max_length=255)),
                ('arrowClass', models.CharField(max_length=255)),
                ('lineClasses', models.CharField(max_length=255)),
            ],
            bases=('libraries.dictable',),
        ),
        migrations.CreateModel(
            name='ProjectType',
            fields=[
                ('dictable_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='libraries.Dictable')),
                ('template', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
            ],
            bases=('libraries.dictable',),
        ),
        migrations.AddField(
            model_name='project',
            name='project_photo',
            field=models.ForeignKey(to='projects.ProjectPhoto'),
        ),
        migrations.AddField(
            model_name='project',
            name='project_style',
            field=models.ForeignKey(to='projects.ProjectStyle'),
        ),
        migrations.AddField(
            model_name='project',
            name='project_type',
            field=models.ForeignKey(to='projects.ProjectType'),
        ),
    ]
