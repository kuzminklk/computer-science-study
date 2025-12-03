def check(input_function):
    def output_function(*args):
        name = args[0]
        age = args[1]
        if age < 0: age = 1
        input_function(name, age)
    return output_function

@check
def info(name, age):
    print(f"Name: {name}, age: {age}")

info("alex", -20)

#Alose can work with result in decorators