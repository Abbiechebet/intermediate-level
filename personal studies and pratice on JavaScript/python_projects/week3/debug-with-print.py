# Original instructions: Print the sum of the odd numbers between 10 and 25
# Add print statements to debug the code
total = 0
print("before the loop total is", total)
for i in range(10,25,2):
  print("i is", i, "total is", total)
total + i
print("after the loop total is", total)
print(total)


# What is wrong with the code? (answer in a comment)
# range needs to start at 11 (instead of 12)

#range needs to stop at 26 (instead of 25)

# it needs to be total += i instead of total + i

total = 0
for i in range(11,25,2):
  total += i
print(total)