import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
rates = [13.58,  15.33, 14.26, 13.92, 12.74, 12.2, 13.44, 15.63, 15.74, 17.08, 17.18, 16.66]

plt.xlabel("Mounth")
plt.ylabel("Popularity")

plt.plot(months, rates)
plt.show()