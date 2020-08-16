from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app)

