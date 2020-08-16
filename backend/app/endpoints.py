from app import app
from app import db
from flask import request
from app.models import User, Scheme, Volunteer, User_Scheme
import json

# Registration of a volunteer
@app.route('/volunteer/register', methods=['POST'])
def register_volunteer():
    content = request.get_json(silent=False)  # change to silent = True
    volunteer = Volunteer(fname=content.get('fname'),
mname=content.get('mname'), lname=content.get('lname'), email=content.get('email'))
    # location of volunteer



@app.route('/user')
def index():
    return "OK"

@app.route('/user/register', methods=['POST'])
def register_user():
	content = request.get_json(silent=False) # change to silent = True
	# check if volunteer exists
	if Volunteer.query.filter_by(volunteer_id=content.get('volunteer_id')).first():
		user = User(
			fname=content.get('fname'),
			mname=content.get('mname'),
			lname=content.get('lname'),
			email=content.get('email'),
			registered_phone_no=content.get('registered_phone_no'),
			address1=content.get('address1'),
			address2=content.get('address2'),
			city=content.get('city'),
			state=content.get('state'),
			pincode=content.get('pincode'),
			gender=content.get('gender'),
			dob=content.get('dob'),
			age=content.get('age'),
			monthly_income=content.get('monthly_income'),
			education=content.get('education'),
			marriage_status=content.get('marriage_status'),
			volunteer_id=content.get('volunteer_id')
		)
		# What to do with volunteer ID??
		db.session.add(user)
		db.session.commit()
	else:
		# 400

@app.route('/scheme/add', methods=['POST'])
def add_scheme():
    content = request.get_json(silent=False) # change to silent = True
    scheme = Scheme(
        organization=content.get('organization'),
        private=content.get('private'),
        description=content.get('description')
    )
    # How to handle criteria?

@app.route('/scheme')
def get_all_schemes():
    scheme_list = Scheme.query.all()
    return scheme_list

@app.route('/scheme/<int:scheme_id>')
def get_scheme(scheme_id):
	scheme = Scheme.query.filter_by(scheme_id=scheme_id)
	scheme_dict = []
	scheme_dict[scheme_id] = scheme.scheme_id
	scheme_dict['organization'] = scheme.organization
	scheme_dict['private'] = scheme.private
	scheme_dict['description'] = scheme.description
	return scheme_dict

def compute(val1, operator, val2):
	if operator == "less than":
		if val1 < val2:
			return True
		else:
			return False
	elif operator == "less than equal to":
		if val1 <= val2:
			return True
		else:
			return False
	elif operator == "greater than":
		if val1 > val2:
			return True
		else:
			return False
	elif operator == "less than equal to":
		if val1 >= val2:
			return True
		else:
			return False
	elif operator == "equal to":
		if val1 == val2:
			return True
		else:
			return False

# Match schemes
@app.route('/scheme/match/<int:user_id>')
def get_schemes_by_user(user_id):
	schemes_list = []
	user  = User.query.filter_by(user_id=user_id).all()
	schemes = Scheme.query.all()
	for scheme in schemes:
		if scheme.criteria_age:
			user_age = user.age
			scheme_age = json.loads(scheme.criteria_age)
			operator = scheme.criteria_age['operator']
			if compute(user_age, operator, scheme_age):
				schemes_list.append(scheme)
		if scheme.criteria_city:
			user_city = user.city
			scheme_city = json.loads(scheme.criteria_city)
			operator = scheme.criteria_city['operator']
			if compute(user_city, operator, scheme_city):
				schemes_list.append(scheme)
		if scheme.criteria_state:
			user_state = user.state
			scheme_state = json.loads(scheme.criteria_state)
			operator = scheme.criteria_state['operator']
			if compute(user_state, operator, scheme_state):
				schemes_list.append(scheme)
		if scheme.criteria_gender:
			user_gender = user.gender
			scheme_gender = json.loads(scheme.criteria_gender)
			operator = scheme.criteria_gender['operator']
			if compute(user_gender, operator, scheme_gender):
				schemes_list.append(scheme)
		if scheme.criteria_monthly_income:
			user_monthly_income = user.monthly_income
			scheme_monthly_income = json.loads(scheme.criteria_monthly_income)
			operator = scheme.criteria_monthly_income['operator']
			if compute(user_monthly_income, operator, scheme_monthly_income):
				schemes_list.append(scheme)
		if scheme.criteria_marriage_status:
			user_marriage_status = user.marriage_status
			scheme_marriage_status = json.loads(scheme.criteria_marriage_status)
			operator = scheme.criteria_marriage_status['operator']
			if compute(user_marriage_status, operator, scheme_marriage_status):
				schemes_list.append(scheme)
		if scheme.criteria_other:
			schemes_list.append(scheme)
	return schemes_list

# Get schemes of a user
@app.route('/user/schemes/<int:user_id>')
def get_schemes_by_user(user_id):
	schemes = User_Scheme.query.filter_by(user_id=user_id).all()
	scheme_list = []
	for scheme in schemes:
		scheme_dict = {}
		scheme_dict['complete'] = scheme.complete
		scheme_dict['status_description'] = scheme.status_description
		scheme_dict['scheme_id'] = scheme.scheme_id
		# Add shc
		scheme_list.append(scheme_dict)
	return scheme_list

# Update progress
@app.route('/user/progress', methods=['POST'])
def update_progress():
    pass
