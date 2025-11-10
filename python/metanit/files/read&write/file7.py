with open("file2.txt", "w+", encoding="utf8") as myfile:
    myfile.write("Hello!")
    myfile.seek(0)
    content = myfile.read()
    print(content)