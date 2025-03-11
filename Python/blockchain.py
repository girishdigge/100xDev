blockchain=[]


def get_last_blockchain_value():
 if len(blockchain)<1:
    return None
 return blockchain[-1]    


def add_value(transaction_amount,last_transaction=[0]):
    """comment
    arguments:
    :transction amount
    :last transction
    """
    if last_transaction==None:
       last_transaction=[1]
    blockchain.append([last_transaction,transaction_amount])
   
def get_transaction_value():
   """Returns the input of the user (a new transaction amount) as a float."""
   user_input=float(input('Your transaction amount please:'))
   return user_input
def get_user_choice():
   user_input=input("enter your choice: ")
   return user_input

def print_blockchain_element():
   for block in blockchain:
       print('Outputting Block')
       print(block)


while True:
   print('Please choose')
   print('1: Add a new transaction value')
   print('2: Output the blockchain blocks')
   print('q: Exit')
   
   user_choice=get_user_choice()
   if user_choice=='1':
        tx_amount=get_transaction_value()
        add_value(tx_amount,get_last_blockchain_value())
   elif user_choice=='2':
      print_blockchain_element()
   elif user_choice=='q':
      break
   else:
      print('Invalid choice')   
print('Done!')