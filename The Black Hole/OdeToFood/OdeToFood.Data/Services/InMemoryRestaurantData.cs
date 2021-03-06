using OdeToFood.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OdeToFood.Data.Services
{
    public class InMemoryRestaurantData : IRestaurantData
    {
        List<Restaurant> restaurants;
        public InMemoryRestaurantData()
        {
            restaurants = new List<Restaurant>()
            {
                new Restaurant{Id = 1 , Name = "Scott Pizza", Cuisine = CuisineType.Italian},
                new Restaurant{Id = 2 , Name = "Tersigules", Cuisine = CuisineType.French},
                new Restaurant{Id = 3 , Name = "Mango Grove", Cuisine = CuisineType.Indian},
            };
        }

        public Restaurant Get(int id)
        {
            return restaurants.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return restaurants.OrderBy(r => r.Name);
        }
        public void Add(Restaurant restaurant)
        {
            //right now this is in memeory only db for later
            restaurants.Add(restaurant);
            restaurant.Id = restaurants.Max(r => r.Id) + 1;
        }


        public void Update(Restaurant restaurant)
        {
            var existing = Get(restaurant.Id);
            if( existing != null)
            {
                existing.Name = restaurant.Name;
                existing.Cuisine = restaurant.Cuisine;
            }
        }

        public void Delete(int id)
        {
            var restaurant = Get(id);
            if (restaurant != null)
            {
                restaurants.Remove(restaurant);
            }
        }
    }
}
