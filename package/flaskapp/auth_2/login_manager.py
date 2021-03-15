from flask_login import LoginManager
from package.flaskapp.auth_2.user import User


def init_manager(app):

    login_manager = LoginManager()
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        # since the user_id is just the primary key of our user table, use it in the query for the user
        return User.query.get(int(user_id))

    return app, login_manager

    