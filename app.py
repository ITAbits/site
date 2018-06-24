from flask import Flask
app = Flask(__name__)

@app.route('/teste')
def hello_world():
    return 'Hello, World!'
