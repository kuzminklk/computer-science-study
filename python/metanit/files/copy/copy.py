FILENAME = "file.txt"
NEWFILENAME = "filecopy.txt"

data = []

with open(FILENAME, "rb") as file:
    data = file.read()

with open(NEWFILENAME, "wb") as file:
    file.write(data)

print("Success")