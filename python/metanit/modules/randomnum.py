import random

num = random.random() * 10000
print(num)

print("----------")

num2 = random.randint(1,20000)
print(num2)

print("----------")

num3 = random.randrange(10,100,10)
print(num3)

print("----------")

names = ["Alex","Sam","Don","Joe","Eli"]
print(random.choice(names))
random.shuffle(names)
print(names)