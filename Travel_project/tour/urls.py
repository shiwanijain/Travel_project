# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('allTours/', views.all_tours),
    path('tour/<int:id>/',views.get_tour),
    path('create-tour/',views.create_tour),
    path('update-tour/',views.update_tour),
    path('delete-tour/',views.delete_tour),
]
