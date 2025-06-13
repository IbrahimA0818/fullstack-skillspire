for i in range (1,16):
    print(i)

for i in range (1, 101):
    if i % 2 == 1:
        print("fizz")
    else: print("buzz")

numbers = [1,3,5,6,4,7,8]
minimum = min(numbers) 
maximum = max(numbers)
average = sum(numbers) / len(numbers)


print(minimum)
print(maximum)
print(round (average))