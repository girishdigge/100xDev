class Car:
     def __init__(self, color, make,model, year):
         self.color=color
         self.make=make
         self.model=model
         self.year=year


     def display_info(self):
          print(self.color, self.make, self.model, self.year)

car1=Car("red","Redbull","RB-21","2025")   
car1.display_info()       