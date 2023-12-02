# Kibo FPWP Final Project
print("Welcome to the Interactive Quiz!")
print("\n")

# Initialize a dictionary to store user's answers
user_details = {}

# Ask questions
user_details ["name"] = input("What is your name? ").title()

user_details ["nationality"] = input("What is your nationality? ").title()

user_details ["interests"] = input("What are your interests? ").capitalize()


  # Display the user's personal information
print("\nYour personal information:")
print(f"Name: {user_details['name']}")
print(f"Nationality: {user_details['nationality']}")
print(f"Interests: {user_details['interests']}")
print("\n------------- \n ")

print(f"Hello {user_details['name']}, let's get started with the interactive quizes!!")

# Function to ask a question and return the user's answer
def ask_question(question, choices):
  print(question)
  for i, choice in enumerate(choices, start=1):
      print(f"{i}. {choice}")

  # Get a valid user choice between 1 and 3
  while True:
      user_answer = input("Enter the number of your choice (1, 2, or 3): ")
      if user_answer.isdigit() and 1 <= int(user_answer) <= 3:
          return int(user_answer)
      else:
          print("Invalid choice. Please enter a number either 1, 2, or 3.")

# Initialize score
score = 0

# Questions and choices
questions = [
  "What is the capital of France?",
  "Which programming language is known for its readability?",
  "How many continents are there on earth?",
  "What is the largest mammal?",
  "How many legs does a spider have?",
  "Which bird cannot fly",
  "Which planet is known as the Red Planet?",
  "What is the chemical symbol for gold?",
  "Which country is also referred to as the: Land of the Rising Sun?",
  "Who directed the film: Inception?",
  "In which year did Christopher Columbus first reach the Americas?",
  " What does CPU stand for?",
  "Who is known as the: King of Pop?",
  "In which sport would you perform a slam dunk?",
  "Who wrote the play: Romeo and Juliet?",
  " Which animal is known as the: ship of the desert?",
  "What is the value of π (pi) to two decimal places?",
  "Avocado is the main ingredient in guacamole",
  "What is the name of the fictional continent in the TV series: Game of Thrones?",
  "Who painted the Mona Lisa?",
]


choices = [
  ["Paris", "London", "Berlin"],
  ["Python", "Java", "C++"],
  [5, 6, 7],
  ["Elephant", "Blue Whale", "Giraffe"],
  ["8", "10", "6"],
  ["Eagle", "Penguin", "Sparrow"],
  ["Jupiter", "Venus", "Mars"],
  [ "Ag", "Au", "Fe"],
  ["Japan","Africa", "Indonesia"],
  ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg"],
  [1607, 1492, 1776],
  ["Computer Processing Unit", "Central Processor Unit", "Central Processing Unit"],
  [ "Michael Jackson", "Madonna", "Beyoncé"],
  [ "Soccer", "Basketball", "Golf"],
  [ "Jane Austen", "Mark Twain", "William Shakespeare"],
  [ "Donkey", "Camel", "Horse"],
  [3.142, 3.41, 3.14],
  [True, False, 0],
  [ "Westeros", "Northos", "Southos"],
  ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"]
]

correct_answers = [1, 1, 3, 2, 1, 2, 3, 2, 1, 1, 2, 3, 1, 2, 3, 2, 3, 1, 1, 3]

# Loop through questions
for i in range(len(questions)):
  user_choice = ask_question(questions[i], choices[i])

  # Check if the user's choice is correct and provide different messages
  if user_choice == correct_answers[i]:
      print("Correct! \n------------- \n ")
      score += 1
  else:
      print(f"Incorrect. The correct answer is {choices[i][correct_answers[i] - 1]}.\n------------- \n ")


# Display final results
print(f"Quiz completed! Your score: {score}/{len(questions)}")

print("Thank you for playing.")