from flask import Flask, url_for, render_template, request, redirect, make_response
from markupsafe import escape
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.get("/")
def index():
    username = request.cookies.get("username")
    if username == None:
        username = "User"
    return render_template("index.html", username=username)

@app.post("/")
def cookies():
    resp = make_response(redirect("/"))
    username = request.form.get("username")
    resp.set_cookie("username", username)
    return resp