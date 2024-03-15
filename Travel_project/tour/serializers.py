

from rest_framework import serializers
from .models import Tour



class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'
    def get_image1_url(self, obj):
        if obj.image1:
            return self.context['request'].build_absolute_uri(obj.image1.url)
        return None

    def get_image2_url(self, obj):
        if obj.image2:
            return self.context['request'].build_absolute_uri(obj.image2.url)
        return None

    def get_image3_url(self, obj):
        if obj.image3:
            return self.context['request'].build_absolute_uri(obj.image3.url)
        return None