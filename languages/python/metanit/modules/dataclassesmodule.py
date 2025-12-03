from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int = 18

alex = Person("Alex")

print(alex.name + str(alex.age))