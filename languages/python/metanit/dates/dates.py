from datetime import date, time, datetime

today = date.today()
print(today)
print("{}.{}.{}".format(today.day, today.month, today.year))   

mytime = time(16,23)
print(mytime)

now = datetime.now()
print(now)

print(now.strftime("%Y-%m-%d"))             # 2017-05-03
print(now.strftime("%d/%m/%Y"))             # 03/05/2017
print(now.strftime("%d/%m/%y"))     

print(now.strftime("%d %B %Y (%A)"))   