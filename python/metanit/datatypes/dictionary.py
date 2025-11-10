user = {
    "username": "alex",
    "email":"alex@gmail.com"
}

user2 = {
    "username": "sam",
    "email":"sam@gmail.com"
}

key = "username"

if key in user:
    print(user.get(key,"user"))

# deleted = user.pop("username") # Delete

# del user["username"] # Also delete

# user.clear() # Delete all

print("----------------")

user3 = user.copy()
user3.update(user2)

for key in user:
    print(user[key])

print("----------------")

for key, value in user.items():
    print(f"Key: {key} Value: {value} ")

print("----------------")

for value in user.values():
    print(f"Value: {value}") 