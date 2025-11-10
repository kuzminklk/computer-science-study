from datetime import datetime
import locale
locale.setlocale(locale.LC_ALL, "")
 
# ---------

now = datetime.now()
print(now.strftime("%d %B %Y (%A)"))   