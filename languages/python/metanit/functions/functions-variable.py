def sum(x,y):
    return x + y

def substract(x,y):
    return x - y

def chose(i):
    if i == "1":
        return sum
    if i == "2":
        return substract
    else:
        return False
    
operation = chose("1")
print(operation(10,20))

operation = chose("2")
print(operation(300,20))