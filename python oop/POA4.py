# Create a Big Cat class
# Give the class properties of speed, strength, intelligence, health and durability. And set all attributes to 5
# Create a Lion class that inherits from the BigCat class and set the Lion's strength to 50 and health to 50
# Give the Lion class a method called king() that accepts a BigCat object as a parameter and depletes all the objects attributes (sets them to 0). 
# If the object is a Cheetah then it should have a 60% chance of leaving unscathed. (Hint use a random number generator)
# Create a Leopard class that inherits from the BigCat class and set the Leopard's strength, intelligence, and health to 30
# Give the Leopard a method called attack that accepts a BigCat object. If the object is a lion then you must run the Lion's king()  function, 
# if the object is anything else then you must deplete the objects health by 15points.
#  If the object is a Cheetah then it should have a 60% chance of leaving unscathed. (Hint use a random number generator)
# Create a Cheetah class that inherits from the BigCat class and set the Cheetah's speed to 75, and the rest of its attributes to 25
# Give the Cheetah a method called run() that accepts a BigCat object. If it encounter's a Leopard run the Leopard's attack method.
# If it encounters the Lion run the Lion's king() method. 
# If the Cheetah runs away from any of its foes then they lose 20 points in health.
# Now after doing all of this try to create a game where ALL objects get created and All their methods are used.
#  In the end there should only be one winner. Challenge: Try to make your game challenging enough so that the Lion doesn't win every single time.
import random

class Bigcat:
    def __init__(self, speed=5, strength=5, smart=5, health=5, durabillity=5):
        self.speed = speed
        self.strength = strength
        self.smart = smart
        self.health = health
        self.dur = durabillity
class Lion(Bigcat):
    def __init__(self):
        super().__init__(health=40, strength=40)
    def king(self, Bigcat):
        if isinstance (Bigcat, Cheetah):
            if random.random() <= 0.5:
                print("Cheetah has left unscathed")
        if random.random() <= 0.6:
            Bigcat.speed = 0
            Bigcat.strength = 0
            Bigcat.smart = 0
            Bigcat.dur = 0
            Bigcat.health = 0
            print(f"{Bigcat.__class__.__name__} Has been defeated.")
        else:
            print(f"{Bigcat.__class__.__name__} Dodged the attack.")
            self.health -= 20
class Leopard(Bigcat):
    def __init__(self):
        super().__init__(strength=35, smart=35, health=35)
    def attack(self, bigcat):
        if isinstance(bigcat, Lion):
            if random.random() <= 0.4: 
                print("Leopard dodged the Lion's attack!")
                return
            bigcat.king(self)
        elif isinstance(bigcat, Cheetah):
            if random.random() <= 0.5:  
                print("Cheetah escaped unscathed!")
                return
        else:
            bigcat.health -= 15
            print(f"{bigcat.__class__.__name__} lost 15 health points!")
    def recover(self):
        if self.health > 0 and random.random() <= 0.4:
            self.health += 10
            print("leopard has recovered 10 health points")

class Cheetah(Bigcat):
    def __init__(self):
        super().__init__(speed=75, strength=30, smart=25, health=25, durabillity=25)
    def run(self, bigcat):
        if isinstance(bigcat,Leopard):
            bigcat.attack(self)
        elif isinstance(bigcat,Lion):
            bigcat.king(self)
        else:
            self.health -= 10
            print("Cheetah has ran away losing 10 health")
        if self.health > 0 and random.random() <= 0.5:
            self.health += 15
            print("Cheetah got a second chance!!")
def main():
    lion = Lion()
    cheetah = Cheetah()
    leopard = Leopard()

    print("Start game")
    print(f"Lion: {vars(lion)}")
    print(f"Cheetah: {vars(cheetah)}")
    print(f"Leopard: {vars(leopard)}")

    max_loops = 100
    loop = 1
    
    while sum(1 for cat in [lion, cheetah, leopard] if cat.health > 0) > 1:
        loop += 1
        if loop > max_loops:
            print("draw!")
            return
        if lion.health > 0:
            lion.king(leopard if leopard.health > 0 else cheetah)
        if leopard.health > 0:
            leopard.attack(cheetah if cheetah.health > 0 else lion)
            leopard.recover()
        if cheetah.health > 0:
            cheetah.run(lion if lion.health > 0 else leopard)

        print("\nCurrent stats:")
        print(f"Lion: {vars(lion)}")
        print(f"Cheetah: {vars(cheetah)}")
        print(f"Leopard: {vars(leopard)}")

    
    winner = None
    if lion.health > 0:
        winner = "Lion"
    elif cheetah.health > 0:
        winner = "Cheetah"
    elif leopard.health > 0:
        winner = "Leopard"
    else:
        winner = "Draw"

    print(f"\nGame end! The winner is: {winner}")
main()

