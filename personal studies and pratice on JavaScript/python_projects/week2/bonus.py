import random, time

# TODO 1: Print a welcome message. Include "press Enter to start".

print("Welcome to our fastest finger game. Press Enter to proceed")

# TODO 2: use input() to wait for the user to press Enter
input()

delay = random.randint(1,10)
time.sleep(delay)

# TODO 3: wait a random number of seconds, then print "DRAW!"
print("DRAW!")

# TODO 4: Time how long it takes for the user to press Enter. Get the current time with time.time()
start = time.time()

# TODO 5: use input() to wait for the user to press Enter
input()

# TODO 6: Use time.time() again to get the time after the user pressed Enter
stop = time.time()

# TODO 7: Print how long it took
diff = stop - start

# TODO 8: Print different results, based on how long it took

print(f"The elapsed time is: {diff}")
if diff > 0.3:
  print("Too slow! Try again next time.")
elif diff < 0.1:
  print("You pressed Enter too soon, didn't you?")
elif diff > 0.1:
  print("You're the fastest draw in the west, congratulations!")
else:
  print("Try again!")