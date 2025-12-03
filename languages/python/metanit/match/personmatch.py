class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def info(self):
        print(f"My name is: {self.name}\nMy age is: {self.age}")

class Worker(Person):
    def __init__(self, name, age, company):
        super().__init__(name, age)
        self.company = company
    
    def __str__(self):
        return super().__str__() + f"\nMy company is {self.company}"



def compare(person):
    match person:
        case Person(name="Tom"|"Tomas")|Worker(name="Tom"|"Tomas") as name:
            print("Hello, Tom!")
            print(name)
        case Person(name="Sam", age=mage) if mage < 20:
            print("Hello, Sam!")




tom = Worker("Tomas", 22, "Apple")
compare(tom)

sam = Person("Sam", 30)
compare(sam)