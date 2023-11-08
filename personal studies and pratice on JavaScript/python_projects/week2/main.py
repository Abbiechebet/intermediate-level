response = int(input("Enter a big number: "))
if not response > 100:
  print("That's not a big enough number!")


password = input("password: ")

if len(password) > 8:
  if any(number in password for number in "0123456789"):
    if password != password.lower():
      if password != password.upper():
        print("Password valid. Account created.") 
      else:
        print("password must contain a lowercase letter")
    else:
      print("password must contain an uppercase letter")
  else:
    print("password must contain a number")
else:
  print("password too short, must be more than 8 characters.")