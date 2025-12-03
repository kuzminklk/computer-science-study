with open("file.txt", "r") as myfile:
    line = myfile.readline()
    while line:
        print(line, end="")
        line = myfile.readline()