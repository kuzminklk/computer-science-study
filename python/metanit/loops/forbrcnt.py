x = 10
y = 10

for i in range(x):
    if i == 5:
        continue #Or break
    for j in range(y):
        print(i*j, end=" ")
    print()