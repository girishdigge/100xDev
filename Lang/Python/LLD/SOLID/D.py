class GmailClient:
    def send_email(self, recipient, subject, body):
        pass


class EmailService:

    def __init__(self):
        self.gmail_client = GmailClient()

        def send_email(self, recipient, subject, body):
            self.gmail_client.send_email(recipient, subject, body)


class EmailClient:

    def send_email(self, recipient, subject, body):
        raise NotImplementedError


class Gmail_Client(EmailClient):
    def send_email(self, recipient, subject, body):
        pass


class Outlook_Client(EmailClient):
    def send_email(self, recipient, subject, body):
        pass


class Email_Service:

    def __init__(self, email_client):
        self.email_client = email_client

    def send_email(self, recipient, subject, body):
        self.email_client.send_email(recipient, subject, body)


gmail_client = Gmail_Client()
email_service = Email_Service(gmail_client)
email_service.send_email("abc", "subject", "body")
