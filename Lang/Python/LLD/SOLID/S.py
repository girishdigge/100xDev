class UserManager:

    def authenticate_user(self, username, password): ...

    def update_user_profile(self, user_id, new_profile_data): ...

    def send_email_notification(self, user_email, message): ...


class User_Authentication:
    def authenticate_user(self, username, password): ...


class User_Profile:

    def update_user_profile(self, user_id, new_profile_data): ...


class Email_Notification:
    def send_email_notification(self, user_email, message): ...
