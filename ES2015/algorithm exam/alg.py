#1
for i in range(256):
    print(i)

#2
for i in range(256):
    print(i+i)

#3
for i in range(256):
    if i % 2 == 0:
        print('\neven')
    else:
        print('\nodd')
    print(i)

#4
def printArrVals(arr):
    for val in arr:
        print(val)
arr = [1,2,4,1,5]
printArrVals(arr)

#5
for i in range(256):
    if i % 2 != 0:
        print(i)

#6
arr = [1,5,2,8,4,3,6]

print(max(arr))

#7
arr = [1,3,2,7,2,5,2,5]
average = sum(arr)/len(arr)
print(average)
    
#8
def maxMinAve(arr):
    maximum = max(arr)
    minimum = min(arr)
    ave = sum(arr)/len(arr)
    print(arr)
arr = [1,2,4,2,8,3,6]
maxMinAve(arr)

#9


#10
def swapstringfornegval(arr):
    for i in range(len(arr)):
        if arr[i] < 0:
            arr[i]='skillspire'
    print(arr)
arr = [1,4,-2,5,-5,2]
swapstringfornegval(arr)

#11
def squarearr(arr):
    for i in range(len(arr)):
        square = arr[i] * arr[i]
        print(square)
arr = [1,3,5,3,5,2]
squarearr(arr)

#12
def shiftarrleft(arr):
    return arr[1:] + [0]
arr = [1,3,2,3,2]
arr = shiftarrleft(arr)
print(arr)

##13
def swaparr(arr):
    arr[0], arr[1] = arr[1], arr[0]
    return arr
arr = [1,2,3,2,4,3]
result = swaparr(arr)
print(result)
