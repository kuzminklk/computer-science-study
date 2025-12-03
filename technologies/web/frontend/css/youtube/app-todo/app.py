from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.db"
db = SQLAlchemy(app)

class ToDoList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, nullable=False)
    created = db.Column(db.DateTime, default=datetime.now())

    def __repr__(self):
        return self.content
    
with app.app_context():
    db.create_all()

@app.route("/", methods=["POST", "GET"])
def index():
    if request.method == "POST":
        task_content = request.form["content"]
        new_task = ToDoList(content=task_content)

        try:
            db.session.add(new_task)
            db.session.commit()
            return redirect("/")
        except:
            return("Database error")

    else:
        tasks = ToDoList.query.order_by(ToDoList.created).all()
        return render_template("index.html", tasks=tasks)
    
@app.route("/delete/<int:id>")
def delete(id):
    task_to_delete = ToDoList.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect("/")
    except:
        return("Database error")

@app.route("/update/<int:id>", methods=["POST", "GET"])
def update(id):
    task_to_update = ToDoList.query.get_or_404(id)
    if request.method == "POST":
        task_to_update.content = request.form["content"]
        try:
            db.session.commit()
            return redirect("/")
        except:
            return("Database error")

    else:
        return render_template("update.html", task=task_to_update)

if __name__ == "__main__":
    app.run(debug=True)