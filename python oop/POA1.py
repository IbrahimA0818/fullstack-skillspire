# Create a car class that has a top speed property and a function that prints out that top speed property.
# Use this class to write a program that creates a car object and prints out its topspeed.
# Using the class that you created in the last task create a location property that starts at 0. Then create a drive() function that increases the location variable by 10 miles.
# Create a stop() function that prints the total distance driven
# Run these functions to simulate a short road trip

class Car:
    topspeed = 200
    location = 0
    make = "audi"
    system = "quattro"
    model = "rs3"

    def top(self):
        print(f"this car maxes out at {self.topspeed}")
    
    def drive(self):
        self.location += 10
        print(f"Driving...")
    
    def stop(self):
        print(f"total distance driven: {self.location}")


audi1 = Car()
audi1.drive()
audi1.stop()
audi1.top()