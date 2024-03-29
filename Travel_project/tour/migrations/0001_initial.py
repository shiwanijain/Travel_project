# Generated by Django 4.2.2 on 2024-02-28 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tour',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=60)),
                ('summary', models.TextField()),
                ('details', models.TextField()),
                ('itinerary', models.TextField()),
                ('faq', models.TextField()),
                ('starting_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('number_of_days', models.PositiveIntegerField()),
                ('send_enquiry_mailer', models.TextField()),
                ('contact_details', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
