# Find the sum of just the odd numbers in this list
numbers = [62, 60, 53, 53, 33, 3, 25, 61, 36, 1, 69, 55, 56, 39, 32, 76, 20, 62, 47]

odds_total = 0
for element in numbers:
  if element % 2 != 0:

    odds_total += element

print(odds_total) 