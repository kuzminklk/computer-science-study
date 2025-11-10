numbers = [13,123,4,-2,53,2,2,4,-2,-23]
numbers[0:6] = [0,0]

for number in numbers:
    print(number)

# def condition(x): return x > 0

numbers2 = filter(lambda x: x > 0, numbers)

print("--------------")


for number in numbers2:
    print(number)

print("--------------")


numbers3 = map(lambda x: x**2, numbers)
for number in numbers3:
    print(number)

print("--------------")


print(f"Max {max(numbers)}")
print(f"Min {min(numbers)}")

print("--------------")


numbers4 = numbers.copy()
numbers5 = numbers2 + numbers3