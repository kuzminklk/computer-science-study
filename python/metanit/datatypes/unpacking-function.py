
def say(*args, **kwargs):
    print(args)
    print(kwargs)

say(123,32,23)

print("-----")

say(name="Alex")

print("-----")

numbers = [123,234,23,2,43]
say(*numbers)

print("-----")

dict1 = {"123":34, "213":34534, "234":234342}
say(**dict1)