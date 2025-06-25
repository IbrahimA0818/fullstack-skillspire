# Create a Person class.
# The constructor for the Person class should accept a name and id number as parameters
# In the Person class create a function that displays the persons name and Id number
# Create an Employee class that inherits from the Person class
# The constructor for the Employee class should accept a name, id number, salary and post as parameters
# Inside the constructor use the super function to invoke the constructor of the parent class
# Outside of the Employee class create a new Person object and a new Employee object and pass in the values for both
# Use the display method to print out the information on both employee and person

class Person:
    def __init__(self, name, id_number):
        self.name = name  
        self.id_number = id_number  

    def display(self):
        print(f"name: {self.name}, id: {self.id_number}")  


class Employee(Person):
    def __init__(self, name, id_number, salary, job):
        super().__init__(name, id_number)  
        self.salary = salary 
        self.job = job  

    def display(self):
        super().display() 
        print(f"salary: {self.salary}, post: {self.job}")  


def main(): 
    person = Person("James", 1242321)
    employee = Employee("Jordan", 342334, 100000, "jumper")

    print("Person info: ")
    person.display()  

    print("\nEmployee info: ")
    employee.display()  


main() 