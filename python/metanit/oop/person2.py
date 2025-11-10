class Person:
    def __init__(self, name, age):

        self.__name = name
        self.__age = age
    def info(self):
        print(f"My name is: {self.__name}\nMy age is: {self.__age}")

    @property # Getter
    def age(self):
        return self.__age

    @age.setter # Setter
    def age(self, age):
        if age > 100 or age < 0:
            print("False age")
            return
        self.__age = age
    
    @property # Getter
    def name(self):
        return self.__name

tom = Person("Tom", 22)
tom.info()

sam = Person("Sam", 30)
sam.info()
sam.age = 5
sam.info()