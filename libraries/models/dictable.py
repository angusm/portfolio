from django.db import models
from django.forms.models import model_to_dict
from django.db.models import ForeignKey
import re

class Dictable(models.Model):

    def to_dict(self, relations=[]):

        # Split the relations
        split_relations = []

        for relation in relations:
            split_relations.append(
                re.split('__', relation)
            )

        return self.get_base_dict(split_relations)

    def get_base_dict(self, relations):
        base_dict = model_to_dict(self)
        final_dict = {}

        # Loop through basic fields
        for field, value in base_dict.iteritems():
            field_object, model, is_direct, is_many_to_many = self._meta.get_field_by_name(field)
            if not is_many_to_many and is_direct and isinstance(field_object, ForeignKey):
                final_dict[field_object.db_column] = value

                for relation in relations:
                    if relation[0] == field:
                        final_dict[field] = self[field].get_base_dict(relation)
                        break
            else:
                final_dict[field] = value

        # Loop through other associations
        return final_dict

    def get_model_fields(self):
        return self._meta.fields