from django.urls import path
from . import views
urlpatterns = [
    path('categorias/', views.CategoriaList.as_view(), name='categoria-list'),
    path('categorias/<int:pk>/', views.CategoriaDetail.as_view(),name='categoria-detail'),
    path('consumiveis/', views.ConsumivelList.as_view(), name='consumivel-list'),
    path('consumiveis/<int:pk>/', views.ConsumivelDetail.as_view(), name='consumivel-detail'),
]