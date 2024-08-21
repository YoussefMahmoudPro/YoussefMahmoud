## importing Flask 
from flask import Flask, render_template

#starting App
app = Flask(__name__)

##importing pages
# Home
@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html", title ="The main")
# Connect us
@app.route("/connect-us")
def connect_us():
    return render_template("connectUs.html", title = "The connectUs")

# Products
@app.route("/products")
def products():
    return render_template("products.html", title = "The Products")


# Sign UP
@app.route("/sign-up")
def sign_up():
    return render_template("sign.html", title = "The SignUp")


# Login
@app.route("/login")
def login():
    return render_template("login.html",title = "The Login")


##running app
if __name__ == "__main__":
    app.run(debug=True, port=5000)