import random

user_inp = int(input("Choose a number between 1-6: "))

dice = random.randint(1, 6)

tries = 1
while dice != user_inp:
    if user_inp > 6:
        print("Too big try again")
    elif user_inp < 1:
        print("too small")
    else: print ("try again")
    user_inp = int(input("Choose a number between 1-6: "))
    tries += 1
print (f"congrats you rolled {dice}. it took you {tries} tries")