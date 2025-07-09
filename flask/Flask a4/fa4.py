from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'supersecret'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/formdata', methods=["POST"])
def formdata():
    # Store form data in the session
    session['Lastname'] = request.form.get('Lastname')
    session['Firstname'] = request.form.get('Fname')
    session['Email'] = request.form.get('email')
    session['City'] = request.form.get('city')
    session['State'] = request.form.get('state')
    session['Zipcode'] = request.form.get('Zipcode')
        
    # Redirect to the result page
    return redirect(url_for('Show_result'))

@app.route('/result', methods=["GET"])
def Show_result():
    # Check if the session contains the required data
    if 'Lastname' not in session:
        return redirect(url_for("index"))
    
    # Retrieve user data from the session
    user = {
        "Lastname": session.get("Lastname"),
        "Firstname": session.get("Firstname"),
        "Email": session.get("Email"),
        "City": session.get("City"),
        "State": session.get("State"),
        "Zipcode": session.get("Zipcode")
    }
    return render_template("result.html", user=user)

if __name__ == "__main__":
    app.run(debug=True)