from app import app
from app import db
from app.models import User, Scheme, Volunteer, User_Scheme




# Registration of a volunteer
@app.route('/volunteer/register', methods=['POST'])
def register_volunteer():
	content = request.get_json(silent=False)  # change to silent = True
    volunteer = Volunteer(
        fname=content.get('fname'),
        mname=content.get('mname'),
        lname=content.get('lname'),
        email=content.get('email'),
    )
	# location of volunteer


@app.route('/user/register', methods=['POST'])
def register_user():
	content = request.get_json(silent=False) # change to silent = True
	# check if volunteer exists
	if(Volunteer.query.filter_by(volunteer_id=content.get(volunteer_id)).first()):
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
def get_scheme():
	scheme = Scheme.query.filter_by(scheme_id=scheme_id)
	sheme_dict[scheme_id] = scheme.scheme_id
	sheme_dict[organization] = scheme.organization
	sheme_dict[private] = scheme.private
	sheme_dict[description] = scheme.description
	return scheme_dict


# Match schemes
@app.route('/scheme/match/<int:user_id>')
def get_schemes_by_user():
	


# Get schemes of a user
@app.route('/user/schemes/<int:user_id>')
def get_schemes_by_user():
	schemes = User_Scheme.query.filter_by('user_id'=user_id).all()
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

