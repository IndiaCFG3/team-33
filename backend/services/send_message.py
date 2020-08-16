print("hi")
from settings import auth_token,account_sid

from twilio.rest import Client




class send_message:
    account_sid=account_sid
    auth_token=auth_token

    def __init__(self,from1,to):
        self.from1=from1
        self.to=to
    

    
    def send_text_message(self,message):
        client = Client(account_sid, auth_token)

        message = client.messages.create(
                              body=message,from_ = self.from1,to=self.to
                          )
        print("success")
    


"""
h=send_message(from1="+12512998158",
                to='+918879303958')
h.send_text_message("Your status has been approved .Please come for verification")


 
"""

