import csv

FILENAME = "users.txt"

users = [
    ["Tom", 23],
    ["Joe", 12],
    ["Garry", 33]
]

with open(FILENAME, "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(users)

with open(FILENAME, "a", newline="") as file:
    user = ["Sam", 34]
    writer = csv.writer(file)
    writer.writerow(user)
