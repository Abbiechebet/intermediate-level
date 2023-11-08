# Write your code below. See the Instructions in the tab to the right
# Cost of each book
book_cost = 20

# Get the number of books the user wants to buy and the amount of money they have
num_books = int(input("Enter the number of books you want to buy: "))
money_have = int(input("Enter how much money you have: "))

# Calculate the total cost of the books
total_cost = num_books * book_cost

# Check if the user has enough money to buy the books
if money_have >= total_cost:
    print("You have enough money, go for it!")
else:
    needed_amount = total_cost - money_have
    print(f"You need ${needed_amount} more to buy that number of books.")
