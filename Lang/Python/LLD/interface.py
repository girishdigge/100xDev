from abc import ABC, abstractmethod

# define an interface


class Vehicle(ABC):
    @abstractmethod
    def start(self): ...

    @abstractmethod
    def stop(self): ...


# implement the Vehicle interface in a car class
class Car(Vehicle):
    def start(self):
        print("Car is Starting...")

    def stop(self):
        print("Car is Stopping...")


if __name__ == "__main__":
    my_car = Car()
    my_car.start()
    my_car.stop()
