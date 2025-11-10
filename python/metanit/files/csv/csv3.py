import csv

FILENAME = "users2.txt"

users = [
    {"name": "Tom", "age": 28},
    {"name": "Alice", "age": 23},
    {"name": "Bob", "age": 34}
]

with open(FILENAME, "w", newline="") as file:
    columns = ["name", "age"]
    writer = csv.DictWriter(file, fieldnames=columns)

    writer.writeheader()
    writer.writerows(users)

    user = {"name" : "Sam", "age": 41}
    writer.writerow(user)



with open(FILENAME, "r", newline="") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(f"{row["name"]} + {row["age"]}")