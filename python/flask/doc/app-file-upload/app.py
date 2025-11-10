from flask import Flask, url_for, render_template, request, redirect
from markupsafe import escape
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.get("/")
def index():
    return render_template("index.html", message="Hello!")

@app.post("/")
def upload():
    uploaded_file = request.files["file"]
    uploaded_file.save(f"/files/{secure_filename(uploaded_file.filename)}")
    return redirect("/")


