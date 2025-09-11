from rest_framework import serializers
from .models import Categoria, Consumivel
class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
class ConsumivelSerializer(serializers.ModelSerializer):
    categoria = CategoriaSerializer(read_only=True)
    categoria_id = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects, source='categoria', write_only=True)
    class Meta:
        model = Consumivel
        fields = '__all__'