# Generated by Django 3.2.12 on 2024-03-05 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tour', '0004_auto_20240305_1820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tourimage',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='tour_images/'),
        ),
    ]
