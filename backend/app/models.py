import enum
from app import db
from datetime import datetime

""" 
class Gender(enum.Enum):
    male = "Male"
    female = "Female"
    others = "Others"


class MarriageStatus(enum.Enum):
    single = "Single"
    married = "Married"
    divorced = "Divorced"
    widow = "Widow"
    widower = "Widower" """


class User(db.Model):
    __tablename__ = 'user'
    user_id = db.Column(db.Integer, primary_key=True)
    registered_phone_no = db.Column(db.String(15), nullable=False)
    fname = db.Column(db.String(50), nullable=False)
    mname = db.Column(db.String(50), nullable=False)
    lname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    address1 = db.Column(db.Text, nullable=False)
    address2 = db.Column(db.Text, nullable=True)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    pincode = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    dob = db.Column(db.String(20), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    monthly_income = db.Column(db.Numeric, nullable=False)
    education = db.Column(db.String(100), nullable=False)
    marriage_status = db.Column(db.String(20), nullable=False)
    volunteer_id = db.Column(db.Integer, db.ForeignKey('volunteer.volunteer_id'), nullable=False)
    
    def __repr__(self):  # shows how user object will look like when its printed known as magic method
        return f"User('{self.fname}','{self.lname}')"


class Scheme(db.Model):
    __tablename__ = 'scheme'
    scheme_id = db.Column(db.Integer, primary_key=True)
    organization = db.Column(db.String(150), nullable=False)
    private = db.Column(db.Boolean, nullable=False)
    description = db.Column(db.Text, nullable=False)
    criteria_city = db.Column(db.Text, nullable = True)
    criteria_state = db.Column(db.Text, nullable=True)
    criteria_gender = db.Column(db.Text, nullable=True)
    criteria_monthly_income = db.Column(db.Text, nullable=True)
    criteria_marriage_status = db.Column(db.Text, nullable=True)
    criteria_age = db.Column(db.Text, nullable=True)
    criteria_other = db.Column(db.Text, nullable = True)

class Volunteer(db.Model):
    __tablename__ = 'volunteer'
    volunteer_id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(50), nullable=False)
    lname = db.Column(db.String(50), nullable=False)
    mname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Volunteer{self.volunteer_id}>'

class User_Volunteer(db.Model):
    __tablename__ = 'user_volunteer'
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), primary_key=True, nullable=False)
    volunteer_id = db.Column(db.Integer, db.ForeignKey('volunteer.volunteer_id'), primary_key=True, nullable=False)

class User_Scheme(db.Model):
    __tablename__ = 'user_scheme'
    user_id = user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), primary_key=True, nullable=False)
    scheme_id = db.Column(db.Integer, db.ForeignKey('scheme.scheme_id'), primary_key=True, nullable=False)
    complete = db.Column(db.Boolean, nullable=False)
    status_description = db.Column(db.Text, nullable=False)