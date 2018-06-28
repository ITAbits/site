from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import boto3
import uuid
import os


app = Flask(__name__, static_folder='build')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DATABASE_URI')
db = SQLAlchemy(app)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists("build/" + path):
        return send_from_directory('build', path)
    else:
        return send_from_directory('build', 'index.html')


@app.route('/getmembers', methods=["GET"])
def getmembers():
    try:
        members = [member.as_dict() for member in Member.query.all()]
        return jsonify(members=members)
    except Exception as e:
        return jsonify(members=None)


@app.route('/addmember', methods=["POST"])
def addmember():
    try:
        if request.form['key'] == 'perguntaprowallace':
            imagelink = saveImage(request.files['image'])
            firstname = request.form['firstname']
            secondname = request.form['secondname']
            callby = request.form['callby']
            since = request.form['since']
            to = request.form['to']
            github = request.form['github']
            linkedin = request.form['linkedin']

            member = Member(firstname, secondname, callby, since, to, imagelink, github, linkedin)

            db.session.add(member)
            db.session.commit()

            return jsonify(memberid=member.id, status="ok")
        else:
            return jsonify(memberid=None, status="missing key")
    except Exception as e:
        print(e)
        return jsonify(memberid=None, status="404")


def saveImage(file):
    extension = os.path.splitext(file.filename)[1]
    if extension == '':
        return None

    filename = "BITS" + str(uuid.uuid4()) + extension
    s3 = boto3.resource('s3')
    S3_BUCKET = os.environ.get('S3_BUCKET')
    s3.Bucket(S3_BUCKET).put_object(Key=filename, Body=file, CacheControl='max-age:2592000')

    path = 'https://%s.s3.amazonaws.com/%s' % (S3_BUCKET, filename)

    return path


# @app.route('/', methods=["GET"])
# def index():
#     return render_template('index.html')


class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.Unicode(), nullable=True)
    secondname = db.Column(db.Unicode(), nullable=True)
    callby = db.Column(db.Unicode(), nullable=False)
    since = db.Column(db.Integer, nullable=False)
    to = db.Column(db.Integer, nullable=False)
    imagelink = db.Column(db.Unicode(), nullable=False)
    github = db.Column(db.Unicode(), nullable=True)
    linkedin = db.Column(db.Unicode(), nullable=True)

    def __init__(self, firstname, secondname, callby, since, to, imagelink, github, linkedin):
        self.firstname = firstname
        self.secondname = secondname
        self.callby = callby
        self.since = since
        self.to = to
        self.imagelink = imagelink
        self.github = github
        self.linkedin = linkedin

    def as_dict(self):
        dicionario = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        return dicionario


if __name__ == '__main__':
    app.run()
