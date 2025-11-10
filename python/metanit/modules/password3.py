import secrets, string

def generate_password(length=8):
    characters = string.ascii_letters + string.digits + string.punctuation
    while True:
        password = ''.join(secrets.choice(characters) for i in range(length))
        if(any(c.islower() for c in password) 
                and any(c.isupper() for c in password)
                and sum(c.isdigit() for c in password) >=3
                and any(c in string.punctuation for c in password)
                ):
            return password
        
print(generate_password())