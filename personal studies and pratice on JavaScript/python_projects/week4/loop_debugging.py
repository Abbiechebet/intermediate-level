#Original instructions: Print the sum of the odd numbers between 10 and 25

# Add print statements to debug the code

# Print before the loop
print("Before the loop")

# Loop to find the sum of odd numbers between 10 and 25
sum_odd = 0
for num in range(10, 25):
    # Print during the loop
    print(f"Checking number: {num}")

    if num % 2 != 0:
        sum_odd += num

# Print after the loop
print("After the loop")

# Print the result
print(f"The sum of odd numbers between 10 and 25 is: {sum_odd}")

# What is wrong with the code? (answer in a comment)
#The starter should be 11 because range starts from the first argument and since 10 is not odd, it should start from 11.

# it should iterate over odd numbers only. The range should be adjusted to skip even numbers.

# Fix: Change the loop range to range(11, 26, 2) to iterate over odd numbers only.
