from django.db import models


class Author(models.Model):
    first_name = models.CharField('Name', max_length=64)
    last_name = models.CharField('Family', max_length=64)
    birthday = models.PositiveSmallIntegerField()
