password = "Jack001"
attempt = 0
while attempt < 4:
  user_input = input("Enter your password: ")
  if user_input == password:
    print("Welcome!")
    break
  else:
    attempt += 1
    print("Incorrect password.")
    if attempt == 3:
      print("Too many attempts. Bye!")
      exit()
print("Thank you for using our system, bye...")