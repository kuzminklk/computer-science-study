import shelve

FILENAME = "states.dat"
with shelve.open(FILENAME) as states:
    states["London"] = "GB"
    states["Paris"] = "France"
    states["Berlin"] = "Germany"
    states["Madrid"] = "Spain"

with shelve.open(FILENAME) as states:
    for key in states:
        print(key + " : " + states.get(key))