class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def info(self):
        print(f"My name is: {self.name}\nMy age is: {self.age}")

tom = Person("Tom", 22)
tom.info()

sam = Person("Sam", 30)
sam.info()

print("------------------")

persons = [tom, sam]

filtered_persons = filter(lambda person: person.age > 25, persons)

for person in filtered_persons:
    person.info()

print("------------------")

persons = [tom, sam]
names = map(lambda p: p.name, persons)

for name in names:
    print(name)