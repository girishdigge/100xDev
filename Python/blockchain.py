blockchain=[]
open_transactions=[]
owner='Girish'

def get_last_blockchain_value():
 if len(blockchain)<1:
    return None
 return blockchain[-1]    


def add_transaction(recipient,sender=owner,amount=1.0):
    """comment
    arguments:
    :sender
    :recipient
    :transction amount default is 1 coin
    """
    transaction= {'sender':sender,'recipient':recipient,'amount':amount}
    open_transactions.append(transaction)

def mine_block():
   pass   

def get_transaction_value():
   """Returns the input of the user (a new transaction amount) as a float."""
   tx_recipient=input('Enter the recipient of the transaction: ')
   tx_amount=float(input('Your transaction amount please: '))
   return (tx_recipient,tx_amount)

def get_user_choice():
   user_input=input("enter your choice: ")
   return user_input

def print_blockchain_element():
   for block in blockchain:
       print('Outputting Block')
       print(block)
   else:
      print('_'*21)
def verify_chain():
   block_index=0
   is_valid=True
   for block_index in range(len(blockchain)):
      if block_index==0:
         continue
      elif blockchain[block_index][0]==blockchain[block_index -1]:
         is_valid=True
      else:
         is_valid=False
         break
   return is_valid  

waiting_for_input=True
while waiting_for_input:
   print('Please choose')
   print('1: Add a new transaction value')
   print('2: Output the blockchain blocks')
   print('h: Manipulate the chain')
   print('q: Exit')
   
   user_choice=get_user_choice()
   if user_choice=='1':
        tx_data=get_transaction_value()
        recipient,amount=tx_data
        add_transaction(recipient,amount=amount)
        print(open_transactions)
   elif user_choice=='2':
      print_blockchain_element()
   elif user_choice=='h':
      if len(blockchain)>=1:
         blockchain[0]=[2]
   elif user_choice=='q':
      waiting_for_input=False
   else:
      print('Invalid choice')   
   if not verify_chain():
      print_blockchain_element()
      print("Blockchain contaminated")  
      break
else:
   print('User left!!!!!!!!!!')   