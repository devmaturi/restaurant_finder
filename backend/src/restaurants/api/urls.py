from restaurants.api.views import RestaurantViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', RestaurantViewSet, basename='restaurants')
urlpatterns = router.urls


# from django.urls import path
# from .views import ( RestaurantListView, RestaurantDetailView, 
# RestaurantCreateView, RestaurantUpdateView, RestaurantDeleteView )

# urlpatterns = [
#     path('', RestaurantListView.as_view()),
#     path('create/', RestaurantCreateView.as_view()),
#     path('<pk>', RestaurantDetailView.as_view()),
#     path('<pk>/update/', RestaurantUpdateView.as_view()),
#     path('<pk>/delete/', RestaurantDeleteView.as_view()),
# ]