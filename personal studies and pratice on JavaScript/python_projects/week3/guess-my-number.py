# See the Instructions tab
import random
# Set secret number

print("I'm thinking of a number between 1 and 99")

# Set secret number
secret_number = random.randint(1, 99)

# Ask the user to guess
while True:
    guess = int(input("Enter your guess: "))

# Check to see if the guess is <, >, or = secret number
    if guess < secret_number:
        print("Too low! Try again.")
    elif guess > secret_number:
        print("Too high! Try again.")
    else:
# Print the right message
        print(f"Congratulations! You guessed the right number: {secret_number}")
        break
