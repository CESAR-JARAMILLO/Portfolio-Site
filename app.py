from flask import Flask, render_template, request
import smtplib
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/thankyou/")
def thankyou():
    return render_template('thankyou.html')

@app.route('/send_email', methods=['POST'])
def send_email():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    # Send the email using smtplib
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login("cesarjaramillodev@gmail.com", os.environ.get('EMAIL_PASSWORD'))
    
    subject = "New message from " + name
    body = "From: " + name + "\nEmail: " + email + "\nMessage: " + message
    msg = f'Subject: {subject}\n\n{body}'
    
    server.sendmail("cesarjaramillodev@gmail.com", "cesarjaramillodev@gmail.com", msg)
    server.quit()
    
    return render_template('thankyou.html')


if __name__ == '__main__':
    app.run(port=5000)

# app.config["DEBUG"] = True