# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('libraries', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Page',
            fields=[
                ('dictable_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='libraries.Dictable')),
                ('dom_class', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('template', models.CharField(max_length=255)),
                ('in_menu', models.BooleanField(default=True)),
            ],
            bases=('libraries.dictable',),
        ),
    ]
