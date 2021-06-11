using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Features.Linq;

namespace Features
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<int, int> square = x => x + x;
            Func<int, int, int> add = (x, y) => x + y;
            Func<int, int, int> addMethod = (x, y) =>
            {
                int temp = x + y;
                return temp;
            };

            //Action return void
            Action<int> write = x => Console.WriteLine(x);

            Console.WriteLine(square(3));
            Console.WriteLine(add(3, 5));
            Console.WriteLine(addMethod(9, 5));
            write(addMethod(9, 5));

            var developers = new Employee[]
             {
                new Employee {Id = 1, Name="Scott"},
                new Employee {Id = 2, Name="Chris"}
             };

            var sales = new List<Employee>()
            {
                new Employee {Id = 1, Name="Alex"}
            };

            var query = developers.Where(e => e.Name.StartsWith("S"))
                .OrderByDescending(e => e.Name);
               // .Select(e => e) //not needed inferred 

            var query2 = from developer in developers
                         where developer.Name.Length == 5
                         orderby developer.Name descending
                         select developer;

            foreach (var emp in query)
            {
                Console.WriteLine(emp.Name);
            };

            foreach (var employee in developers.Where(e => e.Name.Length == 5)
                                               .OrderBy(e => e.Name))
            {
                Console.WriteLine(employee.Name);
            };

        }


    }
}
