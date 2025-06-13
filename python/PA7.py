user_inp = int(input("How much do you want? "))

quantity = user_inp * 99

if user_inp in range (10, 19):
    print (f"Your cost after the added discount is {quantity -25 *99* 0.2}$")
elif user_inp in range (20, 49):
    print(f"Your cost after the added discount is {quantity -25 *99* 0.3}$")
elif user_inp in range (50, 99):
    print(f"Your cost after the added discount is {quantity -5 *99* 0.4}$")
elif user_inp >= 100:
    print (f"Your cost after the added discount is {quantity -25 *99* 0.5}$")
else: print (f"Your cost is {quantity}$")
 