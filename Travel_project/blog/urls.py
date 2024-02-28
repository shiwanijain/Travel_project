from django.urls import path
from . import views

urlpatterns = [
    path('all-blog-posts/', views.all_blog_posts),
    path('blog-post/<int:id>/', views.blog_post_by_id),
    path('create-blog-post/', views.create_blog_post),
    path('update-blog-post/<int:id>/', views.update_blog_post),
    path('delete-blog-post/<int:id>/', views.delete_blog_post),
]