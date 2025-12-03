names = ("Alex","Sam","Don")

a, *tail = names

print(a)
print(tail)


print("-------------")
*b, = names
print(b)


print("-------------")
numbers = [1,234,45,3,12,45,64,46]

first, *numbers2, last = numbers

print(numbers2)
