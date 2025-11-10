class Person:
    def __init__(self, name, age):
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

tom = Person("Tom", 22)
print(tom)

print("----------------")

alan = Worker("Alan", 26, "Apple")
print(alan)

print("----------------")

if isinstance(alan, Worker):
    print("Alan is worker!")

print("----------------")

alan.descriprion()
print(alan.type)

