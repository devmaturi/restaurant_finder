from django.urls import path
from .views import ( RestaurantListView, RestaurantDetailView, 
RestaurantCreateView, RestaurantUpdateView, RestaurantDeleteView )

urlpatterns = [
    path('', RestaurantListView.as_view()),
    path('create/', RestaurantCreateView.as_view()),
    path('<pk>', RestaurantDetailView.as_view()),
    path('update/<pk>', RestaurantUpdateView.as_view()),
    path('delete/<pk>', RestaurantUpdateView.as_view()),
]