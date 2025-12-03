class Figure():
    def area(self):
        pass

class Square(Figure):
    def __init__(self, x,y):
        self.x = x
        self.y = y
    def area(self):
        return self.x * self.y
    
N = Square(10,200)
print(N.area())