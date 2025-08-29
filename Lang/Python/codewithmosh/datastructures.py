letters: list[str] = ["a", "b", "c", "d", "e", "f", 5]
letters.append(21)
letters.insert(4, 2)
for index, letter in enumerate(letters):
    print(letter)


numbers = list(range(20))
print(numbers[::-1])


items = [("prod1", 21), ("prod2", 1), ("prod3", 5)]


def sort_items(item):
    return item[1]


items.sort(key=sort_items)
print(items)

items.sort(key=lambda item: item[1], reverse=True)
print(items)

price = map(lambda item: item[1], items)
print(list(price))
