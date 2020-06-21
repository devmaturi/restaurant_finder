# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from restaurants.models import Restaurant
from .serializers import RestaurantSerializer
from rest_framework import viewsets

class RestaurantViewSet(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

# class RestaurantListView(ListAPIView):
#     queryset = Restaurant.objects.all()
#     serializer_class = RestaurantSerializer

# class RestaurantDetailView(RetrieveAPIView):
#     queryset = Restaurant.objects.all()
#     serializer_class = RestaurantSerializer

# class RestaurantCreateView(CreateAPIView):
#     queryset = Restaurant.objects.all()
#     serializer_class = RestaurantSerializer

# class RestaurantUpdateView(UpdateAPIView):
#     queryset = Restaurant.objects.all()
#     serializer_class = RestaurantSerializer

# class RestaurantDeleteView(DestroyAPIView):
#     queryset = Restaurant.objects.all()
#     serializer_class = RestaurantSerializer



