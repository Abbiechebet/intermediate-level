# Write your solution below the starter code
# Follow the instructions in the tab to the right
#import random
import random

# Welcome the user to the game
print("Welcome to Rock, Paper, Scissors. Good luck!")

# Make a choice for the computer player
computer_choice = random.choice(["Rock", "Paper", "Scissors"])

# Get a choice from the user
user_choice = input("Enter your choice (Rock, Paper, or Scissors): ").strip().capitalize()

# Check if the user's input is valid
if user_choice not in ["Rock", "Paper", "Scissors"]:
    print("Invalid input. Please choose Rock, Paper, or Scissors.")
else:
  # Compare the user and computer choice
    if user_choice == computer_choice:
        result = "draw"
    elif (
        (user_choice == "Rock" and computer_choice == "Scissors")
        or (user_choice == "Scissors" and computer_choice == "Paper")
        or (user_choice == "Paper" and computer_choice == "Rock")
    ):
        result = "win!"
    else:
        result = "lose!"

  # Print the right message, based on the choices
if user_choice == computer_choice:
    print(f"The computer chooses {computer_choice}")
    print(f"{user_choice} and {computer_choice}. It's a draw!")
elif (user_choice == "Rock" and computer_choice == "Scissors"):
    print(f"The computer chooses {computer_choice}")
    print("Rock smashes Scissors. You win!")
elif (user_choice == "Scissors" and computer_choice == "Paper"):
    print(f"The computer chooses {computer_choice}")
    print("Scissors cuts Paper. You win!")
elif (user_choice == "Paper" and computer_choice == "Rock"):
    print(f"The computer chooses {computer_choice}")
    print("Paper covers Rock. You win!")
elif (user_choice == "Rock" and computer_choice == "Paper"):
    print(f"The computer chooses {computer_choice}")
    print("Paper covers Rock. You lose!")
elif (user_choice == "Scissors" and 
   computer_choice == "Rock"):
    print(f"The computer chooses {computer_choice}")
    print("Rock smashes Scissors. You lose!")
elif (user_choice == "Paper" and 
  computer_choice == "Scissors"):
    print(f"The computer chooses {computer_choice}")
    print("Scissors cuts Paper. You lose!")