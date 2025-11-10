def hello(name="user", age=18):
    print("Hello " + name)
    print("Age: " + str(age))

username = input("Name: ")

hello(username)



def ucount(*numbers):
    for i in numbers:
        print(i)

ucount(1,5,34,1,5,3,1)