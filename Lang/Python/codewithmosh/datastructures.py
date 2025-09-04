# letters: list[str] = ["a", "b", "c", "d", "e", "f", 5]
# letters.append(21)
# letters.insert(4, 2)
# for index, letter in enumerate(letters):
#     print(letter)


# numbers = list(range(20))
# print(numbers[::-1])


# items = [("prod1", 21), ("prod2", 1), ("prod3", 5)]


# def sort_items(item):
#     return item[1]


# items.sort(key=sort_items)
# print(items)

# items.sort(key=lambda item: item[1], reverse=True)
# print(items)

# price = map(lambda item: item[1], items)
# print(list(price))

# filtered = filter(lambda item: item[1] > 4, items)
# print(list(filtered))

# prices = [item[1] for item in items if item[1] > 5]
# print(prices)


list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9]

print(list(zip("abcde", list1, list2)))
