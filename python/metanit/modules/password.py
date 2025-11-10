import secrets
import string

characters = string.ascii_letters + string.digits
password = "".join(secrets.choice(characters) for i in range(32))

print(password)