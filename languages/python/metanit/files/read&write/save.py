FILENAME = "save.txt"

def write():
    message = input("Message: ")
    with open(FILENAME, "a") as file:
        file.write(message + "\n")

def read():
    with open(FILENAME, "r") as file:
        for message in file:
            print(message, end="")
    print()

while True:
    selection = int(input("1. Write \n2. Read \n3. Exit \n|-- Choose"))
    match selection:
        case 1: write()
        case 2: read()
        case 3: break
        case _: print("Incorrect option")