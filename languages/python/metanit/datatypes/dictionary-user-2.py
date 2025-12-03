users = {
    0: {
        "username":"Alex",
        "email":"alex@gmail"
    },
    1: {
        "username":"Sam",
        "email":"sam@gmail"
    }
}

for key in users:
    print("|-------------")
    for inkey in users[key]:
        print(f"{inkey}: {users[key][inkey]}")