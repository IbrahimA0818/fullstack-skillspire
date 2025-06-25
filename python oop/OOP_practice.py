# Create a function that accepts a string of 1’s and 0’s and returns a count of all of the 1’s in that string. 
# Example: Given “1001011” return 4. Hint: Remember that strings are just an array of characters that can’t be altered. No built in functions unless they are absolutely necessary.

def countones(numbers):
    count = 0
    for char in numbers:
        if char == '1':
            count += 1
    return count
numbers = "110011101"
result = countones(numbers)
print(result)