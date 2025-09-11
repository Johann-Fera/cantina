from django.shortcuts import render

from rest_framework import generics
from .models import Categoria, Consumivel
from .serializers import CategoriaSerializer, ConsumivelSerializer
class CategoriaList(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
class CategoriaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
class ConsumivelList(generics.ListCreateAPIView):
    queryset = Consumivel.objects.all()
    serializer_class = ConsumivelSerializer
class ConsumivelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Consumivel.objects.all()
    serializer_class = ConsumivelSerializer