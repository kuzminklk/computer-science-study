def func1(name):
    func2(name)

def func2(name):
    print("Hello " + name)

def main():
    func1("Alex")
    func2("Sam")

main()