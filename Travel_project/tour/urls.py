# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('allTours/', views.all_tours),
    path('tourByID/<int:id>/', views.tour_by_id),
]
