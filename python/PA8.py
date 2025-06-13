# x = 3
# y = 4
# result = 3 * x + 5 * y
# print (result)

#calculate the pay and if under 40 hours just x * y but anything over 40 is 150% more

hours = int (input("How many hours have you worked: "))
rate = int (input("enter your hourly rate: "))

if hours > 40:
    overtime = hours - 40
    reg_pay = 40 * rate
    ot_pay = overtime * rate * 1.5
    total_pay = reg_pay + overtime
else: 
    total_pay = hours * rate
print (f"overtime pay: {ot_pay}")
print(f"Total pay: {total_pay}")