class PersonAgeException(Exception):
    def __init__(self, age, minage, maxage):
        self.age = age
        self.minage = minage
        self.maxage = maxage

    def __str__(self):
        return f"неддопустимое значение: {self.age} \n Диапазон возраста {self.minage} - {self.maxage}"


class Person:
    minage = 10
    maxage = 100
    def __init__(self, name, age):
        if self.minage > age or age > self.maxage:
            raise PersonAgeException(age, self.minage, self.maxage)
        self.name = name
        self.age = age

    def __str__(self):
        return f"My name is: {self.name}\nMy age is: {self.age}"

class Worker(Person):
    
    def __init__(self, name, age, company):
        super().__init__(name, age)
        self.company = company
    
    def __str__(self):
        return super().__str__() + f"\nMy company is {self.company}"

    @staticmethod
    def descriprion():
        print("Workers work!")

    type = "Worker!"

try:
    tom = Person("Tom", 22)
    print(tom)

    print("----------------")

    alan = Worker("Alan", 9, "Apple")
    print(alan)

    print("----------------")

    if isinstance(alan, Worker):
        print("Alan is worker!")

    print("----------------")

    alan.descriprion()
    print(alan.type)
except PersonAgeException as info:
    print(info)
