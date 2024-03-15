# Generated by Django 3.2.12 on 2024-03-15 10:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tour', '0007_auto_20240310_1550'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tour',
            name='image1',
        ),
        migrations.RemoveField(
            model_name='tour',
            name='image2',
        ),
        migrations.RemoveField(
            model_name='tour',
            name='image3',
        ),
        migrations.CreateModel(
            name='TourImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='tour_images/')),
                ('tour', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='tour.tour')),
            ],
        ),
    ]