'use strict'; 
(function() {  

    function Person(firstName, lastName, age){


        this.firstName = firstName;
        this.lastName= lastName;
        this.age = age;
        Object.defineProperty(this, 'fullName',
        {
          get: function (){
            return this.firstName + ' '+ this.lastName
            
          },
          enumerable : true,
        });
      };
    
      function Student(firstName,lastName,age) {
        Person.call(this, firstName, lastName,age);
    
        this._enrolledCourses =[];
        this.enroll = function (courseId) {
          this._enrolledCourses.push(courseId);
        };
        this.getCourses = function () 
        {
          return this.fullName + "'s enrolled courses are: " +
          this._enrolledCourses.join(', ');  
        };
      }
      Student.prototype = Object.create(Person.prototype);
      Student.prototype.constructor = Student;
      Student.fromPerson = function(person){
        return new Student(person.firstName,person.lastName,person.age);
      }
    
      let jim = new Student('Jim', 'Beager', 34);
      jim.enroll('CS205');
      jim.enroll('MA101') ; 
      jim.enroll('SA101');
    
    
    
      display(jim);
      display(jim.__proto__);
      display(jim.__proto__.__proto__);
      display(jim.getCourses());
    

})();