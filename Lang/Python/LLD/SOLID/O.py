class ShapeCalculator:

    def calculate_area(self, shape):
        if shape.type == "rectangle":
            return shape.width * shape.height
        elif shape.type == "circle":
            return 3.14 * (shape.radius**2)

    def calculate_perimeter(self, shape):
        if shape.type == "rectangle":
            return shape.width * 2 + shape.height * 2
        elif shape.type == "circle":
            return 2 * 3.14 * shape.radius


from abc import ABC, abstractmethod
import math


class Shape(ABC):
    @abstractmethod
    def calculate_area(self): ...

    @abstractmethod
    def calculate_perimeter(self): ...


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.width * self.height

    def calculate_perimeter(self):
        return 2 * (self.width + self.height)


class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def calculate_area(self):
        return (self.base * self.height) / 2

    def calculate_perimeter(self):
        side = math.sqrt((self.base / 2) ** 2 + self.height**2)
        return 2 * side + self.base


if __name__ == "__main__":
    rect = Rectangle(10, 12)
    print(rect.calculate_area())
    print(rect.calculate_perimeter())
    tri = Triangle(4, 5)
    print(tri.calculate_area())
    print(tri.calculate_perimeter())
