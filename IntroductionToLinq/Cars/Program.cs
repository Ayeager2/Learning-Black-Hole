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
            var cars = ProcessCars("fuel.csv");
            var manufacturers = ProcessManufacturers("manufacturers.csv");

            var query =
                from car in cars
                join manufacturer in manufacturers
                    on car.Manufacturer equals manufacturer.Name
                orderby car.Combined descending, car.Name ascending
                select new
                {
                    manufacturer.Headquarters,
                    car.Name,
                    car.Combined
                };
            foreach (var car in query.Take(10))
            {
                Console.WriteLine($"{car.Headquarters} {car.Name} : {car.Combined}");
            }

            //select new
            //{
            //    car.Manufacturer,
            //    car.Name,
            //    car.Combined
            //};


            //var result = cars.SelectMany(c => c.Name)
            //    .OrderBy(c => c);

            //foreach (var name in result)
            //{
            //    Console.WriteLine(name);
            //}

            //var result = cars.Select(c => c.Name);

            //var result = cars.Select(c => new { c.Manufacturer, c.Name, c.Combined });

            //var query = cars.OrderByDescending(c => c.Combined)
            //    .Where(c => c.Manufacturer == "BMW" && c.Year == 2016)
            //    .OrderByDescending(c => c.Combined)
            //    .ThenBy(c => c.Name);

            //var first = 
            //        cars
            //          .OrderByDescending(c => c.Combined)              
            //          .OrderByDescending(c => c.Combined)
            //          .ThenBy(c => c.Name)
            //          .First(c => c.Manufacturer == "BMW" && c.Year == 2016);

            //var result = cars.Any(c => c.Manufacturer == "Ford");
            //Console.WriteLine(result);
            // result = cars.All(c => c.Manufacturer == "Ford");
            //Console.WriteLine(result);


        }

        private static List<Manufacturer> ProcessManufacturers(string path)
        {
            var query =
                File.ReadAllLines(path)
                .Where(l => l.Length > 1)
                .Select(l =>
                {
                    var columns = l.Split(',');
                    return new Manufacturer
                    {
                        Name = columns[0],
                        Headquarters = columns[1],
                        Year = int.Parse(columns[2])
                    };
                });
            return query.ToList();
        }

        private static List<Car> ProcessCars(string path)
        {
            var quary =
                 File.ReadAllLines(path)
                 .Skip(1)
                 .Where(line => line.Length > 1)
                 .ToCar();

            return quary.ToList();
        }

    }
}
