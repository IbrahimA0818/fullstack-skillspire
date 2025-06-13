user_inp = int (input ("Choose a random number between 1-10: "))
import random
x = (random.randint(1, 10))
if user_inp == x :
    print("congrats you won")
elif user_inp > 10 :
    print("that number is too big choose a diffrent number")
elif user_inp < 0 :
    print("That number is too small choose a diffrent number")
else :
    print("try again")