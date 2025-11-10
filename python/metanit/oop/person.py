class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __del__(self):
        print("Удаление объекта")
    def info(self):
        print(f"My name is: {self.name}\nMy age is: {self.age}")

tom = Person("Tom", 22)
tom.info()

sam = Person("Sam", 30)
sam.info()