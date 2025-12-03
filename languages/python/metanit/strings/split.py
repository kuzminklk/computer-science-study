string1 = "Alex Sam Don Joe"

names = string1.split()
for name in names:
    print(name)

text = ' -|- '.join(names)
print(text)