from datetime import timedelta, datetime


now = datetime.now()
print(now)

three_hours = timedelta(hours=3)
print(three_hours.total_seconds())

next = now + three_hours
print(next)

if next != now:
    print("Not equal!")