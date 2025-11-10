class Power():
    def __init__(self, value, power):
        self.value = value
        self.power = power

    def dopower(self):
        if self.power > 0:
            self.power = self.power - 1
            self.value = self.value * self.dopower()
        return self.value
    
    def __str__(self):
        return str(self.value)
    
a = Power(10, 10)

a.dopower()

print(a)