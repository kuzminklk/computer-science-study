import secrets

token = secrets.token_bytes()
print(token)

token = secrets.token_bytes(10)
print(token)

token = secrets.token_hex(12)
print(token)

url_token = secrets.token_urlsafe(12)
print(url_token)
