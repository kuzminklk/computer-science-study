from flask import Flask, url_for, render_template, request, redirect, make_response, session
from markupsafe import escape
from werkzeug.utils import secure_filename
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_hex()

@app.get("/")
def index():
    if "username" in session:
        return f"Logged in as {session["username"]}"
    return "Not logged in"

@app.post("/login")
def login():
    session["username"] = request.form["username"]
    return redirect("/")

@app.get("/login")
def login_page():
    return '''
        <form method="post">
            <p><input type=text name=username>
            <p><input type=submit value=Login>
        </form>
    '''

@app.get("/logout")
def logout():
    session.pop("username", None)
    return redirect("/")