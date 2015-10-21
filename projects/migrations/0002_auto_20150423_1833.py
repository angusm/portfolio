# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectphoto',
            name='name',
            field=models.CharField(default='NAME', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='projectstyle',
            name='name',
            field=models.CharField(default='NAME', max_length=255),
            preserve_default=False,
        ),
    ]
