# Find the sum of the even numbers from 10 to 100 (including 10 and 100)

total = 0
for number in range(10, 101, 2):
  total += number

print(total)
