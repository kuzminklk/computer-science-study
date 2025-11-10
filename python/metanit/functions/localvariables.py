name = "Alex"

def hello():
    global name
    name = "Sam"
    print("Hello " + name)

hello()
print(name)

# Also nonlocal ...