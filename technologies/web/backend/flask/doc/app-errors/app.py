from flask import Flask, url_for, render_template, request, redirect, make_response, abort
from markupsafe import escape
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.get("/")
def index():
    abort(404)
    return render_template("index.html")

@app.errorhandler(404)
def error_404(error):
    return render_template("error.html"), 404
