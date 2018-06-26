from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy
import boto3
import uuid
import os


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DATABASE_URI')
db = SQLAlchemy(app)


@app.route('/getmembers', methods=["GET"])
def getmembers():
    try:
        members = [member.as_dict() for member in Member.query.all()]
        return jsonify(members=members)
    except Exception as e:
        print(e)

@app.route('/addmember', methods=["POST"])
def addmember():
    try:
        firstname = request.form['firstname']
        secondname = request.form['secondname']
        callby = request.form['callby']
        since = request.form['since']
        to = request.form['to']
        imagelink = request.form['imagelink']

        member = Member(firstname, secondname, callby, since, to, imagelink)

        db.session.add(member)
        db.session.commit()

        return jsonify(memberid=member.id)
    except:
        return jsonify(memberid=None)

@app.route('/',methods=["GET"])
def index():
    return render_template("index.html")

def saveImage(file):
    extension = os.path.splitext(file.filename)[1]
    if extension == '':
        return None

    filename = str(uuid.uuid4()) + extension
    s3 = boto3.resource('s3')
    S3_BUCKET = os.environ.get('S3_BUCKET')
    s3.Bucket(S3_BUCKET).put_object(Key=filename, Body=file, CacheControl='max-age:2592000')

    path = 'https://%s.s3.amazonaws.com/%s' % (S3_BUCKET, filename)

    return path


class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.Unicode(), nullable=True)
    secondname = db.Column(db.Unicode(), nullable=True)
    callby = db.Column(db.Unicode(), nullable=False)
    since = db.Column(db.Integer, nullable=False)
    to = db.Column(db.Integer, nullable=True)
    imagelink = db.Column(db.Unicode(), nullable=False)

    def __init__(self, firstname, secondname, callby, since, to, imagelink):
        self.firstname = firstname
        self.secondname = secondname
        self.callby = callby
        self.since = since
        self.to = to
        self.imagelink = imagelink

    def as_dict(self):
        dicionario = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        return dicionario

if __name__ == '__main__':
    app.run()
