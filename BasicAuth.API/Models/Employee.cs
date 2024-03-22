using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BasicAuth.API.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public bool IsActive { get; set; }

        public static List<Employee> GetEmployees() 
        {
            List<Employee> employees = new List<Employee>()
            {
               new Employee{ Id=1,FirstName="Employee",LastName=" 1",Gender="Male",City="City1",IsActive=true },
                new Employee{ Id=2,FirstName="Employee",LastName=" 2",Gender="Male",City="City2",IsActive=true },
                new Employee{ Id=3,FirstName="Employee",LastName=" 3",Gender="Male",City="City3",IsActive=true },
                new Employee{ Id=4,FirstName="Employee",LastName=" 4",Gender="Male",City="City4",IsActive=true },
                new Employee{ Id=5,FirstName="Employee",LastName=" 5",Gender="Male",City="City5",IsActive=true }
            };
            return employees;
        }
    }
}