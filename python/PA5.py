import random

rpz = { 1: "Rock", 2: "Paper", 3: "Scissors" }

user_input = int(input("Enter a number (1 for Rock, 2 for Paper, 3 for Scissors): "))
if user_input not in rpz:
    print("Invalid input. Please enter 1, 2, or 3.")
    exit()

computer_input = random.randint(1, 3)

print(f"You chose: {rpz[user_input]}")
print(f"Computer chose: {rpz[computer_input]}")


if user_input == computer_input:
    print("tie!")
elif(
    (user_input == 1 and computer_input == 3) or
    (user_input == 2 and computer_input == 1) or
    (user_input == 3 and computer_input == 2)
):
    print("You win!")
else:
    print("You lose! try again")