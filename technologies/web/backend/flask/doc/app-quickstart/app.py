from flask import Flask, url_for, render_template
from markupsafe import escape

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", message="Hello!")

@app.route("/<name>")
def hello(name):
    return render_template("index.html", message=("Hello!" + escape(name)))
