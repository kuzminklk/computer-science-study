# Lists in Python like arrays in C, JS

names = ["Alan", "Max"] * 3

names.append("Alice")

names.insert(0, "Bill")

names.extend(["Mike", "Sam"])

index = names.index("Bill")

names.pop(index)

names.pop()

names.remove("Max")

del names[1]

for name in names:
    print(name)

print("---------------")

if "Alice" in names:
    print("Alice here!")

print("---------------")

print(names.count("Max"))

print("---------------")

names.sort(key=str.lower)

for name in names:
    print(name)


print("---------------")


names.reverse()

for name in names:
    print(name)


print("---------------")

sortednames = sorted(names)



"""
append(item): добавляет элемент item в конец списка

insert(index, item): добавляет элемент item в список по индексу index

extend(items): добавляет набор элементов items в конец списка

remove(item): удаляет элемент item. Удаляется только первое вхождение элемента. Если элемент не найден, генерирует исключение ValueError

clear(): удаление всех элементов из списка

index(item): возвращает индекс элемента item. Если элемент не найден, генерирует исключение ValueError

pop([index]): удаляет и возвращает элемент по индексу index. Если индекс не передан, то просто удаляет последний элемент.

count(item): возвращает количество вхождений элемента item в список

sort([key]): сортирует элементы. По умолчанию сортирует по возрастанию. Но с помощью параметра key мы можем передать функцию сортировки.

reverse(): расставляет все элементы в списке в обратном порядке

copy(): копирует список
"""

"""
len(list): возвращает длину списка

sorted(list, [key]): возвращает отсортированный список

min(list): возвращает наименьший элемент списка

max(list): возвращает наибольший элемент списка
"""
