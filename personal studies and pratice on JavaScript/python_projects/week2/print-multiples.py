user_number = int(input("input a number: "))

if user_number > 10 and user_number < 100:
  print(f"{user_number} is a medium sized number")
  
elif user_number < 10 or user_number > 100:
  print(f"{user_number} is either small or large")
  
else:
  print(f"{user_number} is exactly 10 or 100")



user_number = int(input("Input a number: "))

if user_number % 3 == 0 and user_number % 5 == 0:
    print(f"{user_number} is a multiple of both 3 and 5")
elif user_number % 3 == 0:
    print(f"{user_number} is a multiple of 3")
elif user_number % 5 == 0:
    print(f"{user_number} is a multiple of 5")
else:
    print(user_number)
