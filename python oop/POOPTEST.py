# question 1

temp = int(input("Enter the temperature in farenheit."))
celcius = (temp - 32) * 5/9
print(round(celcius))


# question 2
array = [1, 4, 2, 6, 2, 5, 8]
oddnum = 0
evennum = 0
for i in array:
    if i % 2 > 0:
        oddnum += 1
    else:
        evennum += 1
print(f"Even numbers: {evennum}, Odd numbers: {oddnum}")



# question 3

Numbers = [12, 42, 64, 2, 34, 112, 441]
Biggest = max(Numbers)
smallest = min(Numbers)

print(f"The largest number is {Biggest}, the smallest number is {smallest}")


# question 4

import random

class Human:
    def __init__(self, name, strength=3, smart=3, dexterity=3, health=100):
        self.name = name
        self.strength = strength
        self.smart = smart
        self.dex = dexterity
        self.health = health
    def attack(self, target):
        damage = self.strength * 5
        target.health -= damage

class Wizard(Human):
    def __init__(self, name):
        super().__init__(name, smart=25, health=50)
    def heal(self):
        addhp = self.smart * 10
        if random.random() <= 0.5:
            self.health += addhp
        else:
            self.smart -= 10
    def fireball(self, target):
        damage = random.randint(20, 50)
        target.health -= damage
class Ninja(Human):
    def __init__(self, name):
        super().__init__(name, dexterity=175)
    def steal(self, target):
        leech = self.strength * 5
        target.health -= leech
        self.health += 10
    def get_away(self):
        if random.random() <= 0.5:
            self.health -= 15
class Samurai(Human):
    def __init__(self, name):
        super().__init__(name, health=200)
    def death_blow(self, target):
        if target.health <= 50:
            target.health = 0
        else:
            target.health -= target.health * 0.5
    def meditate(self):
        if random.random() <= 0.7:
            self.health = 200
        else:
            None

def main():
    ninja = Ninja("ninja")
    wizard = Wizard("wizard")
    samurai = Samurai("samurai")

    print("Start battle!")
    print(f"Ninja HP: {ninja.health}")
    print(f"Wizard HP: {wizard.health}")
    print(f"Samurai HP: {samurai.health}")

    wizard.fireball(samurai)
    samurai.death_blow(ninja)
    ninja.steal(wizard)
    samurai.meditate()
    wizard.heal()
    ninja.steal(samurai)
    wizard.fireball(samurai)
    samurai.death_blow(wizard)
    samurai.death_blow(ninja)


    print("\nbattle end.")
    print(f"{samurai.name}: {samurai.health} HP, {wizard.name}: {wizard.health} HP, {ninja.name}: {ninja.health} HP")

main()
