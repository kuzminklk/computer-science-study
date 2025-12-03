try:
    x = int(input("X: "))
    y = int(input("Y: "))

    z = x/y
    print("Z: z")

except ValueError as info:
    print("Enter a numbers!")
    print(info)
except ZeroDivisionError:
    print("Cant divide by zero")
except BaseException:
    print("Error!")

print("Exit")