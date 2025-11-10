def decorator(inner_function):
    def outer_function():
        print("*******************")
        inner_function()
        print("*******************")
    return outer_function

@decorator
def hello():
    print("Hello!")

hello()