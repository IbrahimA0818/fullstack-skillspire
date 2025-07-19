from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///courses.db"

db = SQLAlchemy(app)

class Appointments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    issue = db.Column(db.String(1000), nullable=False)
    appointment_date = db.Column(db.DateTime, nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.now(timezone.utc))

@app.route('/')
def index():
    appointments = Appointments.query.all()
    return render_template('index.html', appointments=appointments)

@app.route('/add')
def add_page():
    return render_template('add_appointment.html')

@app.route('/addappointments', methods=["POST"])
def add_appointments():
    name = request.form['name']
    issue = request.form['issue']
    appointment_date = datetime.strptime(request.form['appointment_date'], '%Y-%m-%dT%H:%M')
    
    appointments = Appointments(name=name, issue=issue, appointment_date=appointment_date)
    db.session.add(appointments)
    
    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print("Error:", e)
    
    return redirect('/')

@app.route('/delete_appointment/<int:id>')
def delete_appointment(id):
    appointment = Appointments.query.get_or_404(id)
    db.session.delete(appointment)
    
    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print("Error:", e)
    
    return redirect('/')

if __name__ == "__main__":
    with app.app_context():
        db.drop_all()
        db.create_all()
        app.run(debug=True)