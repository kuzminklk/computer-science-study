age = int(input("Age: "))

name = input("Name: ")

def info():
    if age > 100 or age < 0:
        print("Wrong age")
        return
    print("\n Info: ")
    print(f"Age - {age}")
    print(f"Name - {name}")

info()