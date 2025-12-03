names = {"Sam", "Alex", "Sam"} # Set

names.remove("Sam")

names.add("Sam")

names.discard("Sam")

names.clear()

print("------Add-----")

names.add("Alice")

names.add("Simon")

for name in names:
    print(name)

print("-----Copy------")
names2 = names.copy()
names2.add("John")
names2.add("Elisa")
names2.add("Carl")
names2.add("Alexander")
for name in names2:
    print(name)


# Union
print("------Union-----")
names3 = names.union(names2) # or names3 | names2
for name in names3:
    print(name)


# Intersection
print("----Intersection-------")
names4 = names.intersection(names2) # or names & names2
# or names.intersection_update(names2)
for name in names4:
    print(name)


# Difference
print("-----Difference------")
names5 = names.difference(names2)
for name in names5:
    print(name)
print("|")

# Symmetric Difference
print("-----Symmetric Difference------")
names5 = names.symmetric_difference(names2)
for name in names5:
    print(name)