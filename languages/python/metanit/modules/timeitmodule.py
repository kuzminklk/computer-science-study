import timeit

def sum():
    result = 0
    for i in range(10000):
        result +=i
    return result

print(sum())

time = timeit.timeit(lambda: sum(), number=10000)
print(time)

# timeit.default_timer() ...