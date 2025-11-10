names = {"Alex","Sam","Don","John","Eli"}

names2 = {"Alex","Sam"}

print("Is subset: "+ str(names2.issubset(names)))

print("Is superset: "+ str(names.issuperset(names2)))

# ---------------

# Frozenset, cant change, delete
NAMES = frozenset({"Alex", "Eli"})