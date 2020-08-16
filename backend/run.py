from flask import Flask
from flask_sqlalchemy import SQLAlchemy  #for qul database


app = Flask(__name__)

app.config['SECRET_KEY'] = 'fdd344b27cf24f67a0fc311cfd6b3573' #for qul database
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///site.db'      #for qul database
db = SQLAlchemy(app)