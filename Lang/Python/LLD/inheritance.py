class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating")


class Dog(Animal):
    def eat(self):
        print(f"{self.name} is eating bone")

    def bark(self):
        print(f"{self.name} is barking")
        super().eat()


if __name__ == "__main__":
    my_dog = Dog("Bruno")
    my_dog.eat()
    my_dog.bark()
