using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Cars
{
    class Program
    {
        static void Main(string[] args)
        {
            var cars = ProcessFile("fuel.csv");

            var query = cars.OrderByDescending(c => c.Combined)
                .Where(c => c.Manufacturer == "BMW" && c.Year == 2016)
                .OrderByDescending(c => c.Combined)
                .ThenBy(c => c.Name);

            var first = cars.OrderByDescending(c => c.Combined)              
              .OrderByDescending(c => c.Combined)
              .ThenBy(c => c.Name)
              .First(c => c.Manufacturer == "BMW" && c.Year == 2016);

            foreach (var car in query.Take(10))
            {
                Console.WriteLine($"{car.Name} : {car.Combined}");
            }
        }

        private static List<Car> ProcessFile(string path)
        {
            return
                 File.ReadAllLines(path)
                 .Skip(1)
                 .Where(line => line.Length > 1)
                 .Select(Car.ParseFromCsv)
                 .ToList();

        }


    }
}
