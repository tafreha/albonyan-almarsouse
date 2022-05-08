def withdraw_money(current_balance, amount):
    if(current_balance >= amount):
        current_balance =current_balance - amount
        return current_balance
        #print("the balance is", current_balance)
#withdraw_money(100,80)
balance= withdraw_money(100,80)
if (balance <= 50):
    print("this make deposit")
else:
    print("it's great")