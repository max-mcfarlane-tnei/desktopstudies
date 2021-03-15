from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required
from package.flaskapp.auth_2.user import User

auth_bp = Blueprint('auth_2', __name__, static_folder='static', template_folder='templates', url_prefix='/auth_2')


@auth_bp.route('/signup')
def signup():
    return render_template('signup.html')


@auth_bp.route('/login')
def login():
    return render_template('login_2.html')


@auth_bp.route('/signup', methods=['POST'])
def signup_post():
    email = request.form.get('email')
    name = request.form.get('name')
    password = request.form.get('password')

    user = User.query.filter_by(
        email=email).first()  # if this returns a user, then the email already exists in database

    if user:  # if a user is found, we want to redirect back to signup page so user can try again
        flash('Email address already exists')
        return redirect(url_for('auth_2.signup'))

    # create a new user with the form data. Hash the password so the plaintext version isn't saved.
    new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))
    print("I am here")

    # add the new user to the database
    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for('auth_2.login'))


@auth_bp.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False

    user = User.query.filter_by(email=email).first()

    # check if the user actually exists
    # take the user-supplied password, hash it, and compare it to the hashed password in the database
    if not user or not check_password_hash(user.password, password):
        flash('Please check your login details and try again.')
        return redirect(url_for('auth_2.login'))  # if the user doesn't exist or password is wrong, reload the page

    # if the above check passes, then we know the user has the right credentials
    login_user(user, remember=remember)
    # return redirect(url_for('subapp.aubapp'))
    return redirect(url_for('desksim.restoration'))


@auth_bp.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth_2.index'))


@auth_bp.route('/')
def index():
    return render_template('index.html')


@auth_bp.route('/profile')
@login_required
def profile():
    return redirect(request.url)  #redirect('RestorationSteps.html')
    # return render_template('profile.html', name=current_user.name)
