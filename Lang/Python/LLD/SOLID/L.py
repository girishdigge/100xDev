class Vehicle:
    def start(self):
        raise NotImplementedError


class Car(Vehicle):
    def start(self):
        print("car is starting...")


class Bike(Vehicle):
    def start(self):
        print("peddeling initiated...")


car = Car()
car.start()

bike = Bike()
bike.start()
