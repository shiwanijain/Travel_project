from django.db import models

# Create your models here.
# models.py

from django.db import models

class Tour(models.Model):
    title = models.CharField(max_length=60)
    summary = models.TextField()  # Renamed from 'body' to 'summary'
    details = models.TextField()
    itinerary = models.TextField()
    faq = models.TextField()
    starting_price = models.DecimalField(max_digits=10, decimal_places=2)
    number_of_days = models.PositiveIntegerField()
    contact_details = models.TextField()
    image1 = models.ImageField(upload_to='tour_images/', blank=True, null=True)
    image2 = models.ImageField(upload_to='tour_images/', blank=True, null=True)
    image3 = models.ImageField(upload_to='tour_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

    
