import pickle

FILENAME = "user.dat"

name = "Alex"
age = 20

with open(FILENAME, 'wb') as file:
    pickle.dump(name, file)
    pickle.dump(age, file)

with open(FILENAME, 'rb') as file:
    lname = pickle.load(file)
    lage = pickle.load(file)
    print(f"{lname} : {lage}")