names = [" Alex", " Joe", " Sam"]

with open("file.txt", "a+") as myfile:
    print("File working!")
    myfile.write("\nHello, user!")
    myfile.writelines(names)
    print("\nHmm", file=myfile)

