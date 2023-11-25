bal = 100
itm1 = 5
itm2 = 8
itm3 = 12
itm4 = 68
itm5 = 25
itm6 = 34

while bal > 5:
  print("Continue shopping...")
  item = input("What would you like to buy? ")
  if item == "1":
      bal = bal - itm1
      print("You bought item 1. Your balance is now", bal)
  elif item == "2":
        bal = bal - itm2
        print("You bought item 2. Your balance is now", bal) 
  elif item == "3":
        bal = bal - itm3
        print("You bought item 3. Your balance is now", bal)
  elif item == "4":
        bal = bal - itm4
        print("You bought item 4. Your balance is now", bal)
  elif item == "5":
        bal = bal - itm5
        print("You bought item 5. Your balance is now", bal) 
  elif item == "6":
        bal = bal - itm6
        print("You bought item 6. Your balance is now", bal) 
  else:
    print("You can't buy that item.")
    
  
print("Thank you for shopping. Bye.")

