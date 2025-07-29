// Create a Person class.
// The constructor for the Person class should accept a name and id number as parameters
// In the Person class create a function that displays the persons name and Id number
// Create an Employee class that inherits from the Person class
// The constructor for the Employee class should accept a name, id number, salary and post as parameters
// Inside the constructor use the super function to invoke the constructor of the parent class
// Outside of the Employee class create a new Person object and a new Employee object and pass in the values for both
// Use the display method to print out the information on both employee and person

class Person{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    display(){
        return `Name: ${this.name} Id: ${this.id}`;
    }
}
class Employee extends Person{
    constructor(name, id, salary, post){
        super(name, id);
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.post = post;

    }
    display(){
        return `Name: ${this.name} Id: ${this.id} Salary: ${this.salary} Job: ${this.post}`;
    }
}

const person1 = new Person("Mark Fark", 123);
const employee1 = new Employee("Josh Bosh", 1112, 100000, "Backend Developer");

console.log("Employee Information:");
console.log(employee1.display());
console.log("\nPerson information:")
console.log(person1.display());
