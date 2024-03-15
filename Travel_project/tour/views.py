# views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Tour
from .serializers import TourSerializer

@api_view(['GET'])
def all_tours(request):
    tours = Tour.objects.all()
    serializer = TourSerializer(tours, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def get_tour(request, id):
    try:
        tour = Tour.objects.get(id=id)
        serializer = TourSerializer(tour)
        return Response(serializer.data)
    except Tour.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def create_tour(request):
    serializer = TourSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_tour(request, id):
    try:
        tour = Tour.objects.get(id=id)
        serializer = TourSerializer(tour, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Tour.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def delete_tour(request, id):
    try:
        tour = Tour.objects.get(id=id)
        tour.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Tour.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)