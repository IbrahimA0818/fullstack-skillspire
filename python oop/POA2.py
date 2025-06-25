class Boxer:
    def __init__(self, name, size, strength, wins, losses):
        self.name = name
        self.size = size
        self.strength = strength
        self.wins = wins
        self.losses = losses

    def stats(self):
        print(f"Name: {self.name}")
        print(f"Size: {self.size}")
        print(f"Strength: {self.strength}")
        print(f"Wins: {self.wins}")
        print(f"Losses: {self.losses}")

boxer1 = Boxer("Rocky", 7, 9, 10, 1)
boxer2 = Boxer("creed", 1, 10, 8, 3)

boxer1.stats()
boxer2.stats()


choice = input("Choose a boxer to bet on (rocky/creed): ")

def better_boxer(b1, b2):
    b1_score = b1.size + b1.strength + b1.wins - b1.losses
    b2_score = b2.size + b2.strength + b2.wins - b2.losses

    if b1_score > b2_score:
        return b1
    else:
        return b2

winner = better_boxer(boxer1, boxer2)

if choice.lower() == winner.name.lower():
    print(f"Congratulations! You won your bet")
else:
    print(f"Sorry, you lost your bet")
