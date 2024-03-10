from django.db import models

# Create your models here.

# models.py

# models.py

from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    author = models.CharField(max_length=100, default='Anonymous')  

    def __str__(self):
        return self.title


# class Image(models.Model):
#     image = models.ImageField(upload_to='blog_images/')

#     def __str__(self):
#         return str(self.image)
