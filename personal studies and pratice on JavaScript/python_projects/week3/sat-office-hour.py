name = "Abbie"
for letter in name:
    print(letter, end=" ")




# error handler
try:
    password = "abbie001"
    attempt = 0
    while attempt < 4:
        user_input = input("Enter your password: ")
        if user_input == password:
            print("Welcome!")
            break
        else:
            attempt += 1
            print("Incorrect password.")
            if attempt == 4:
                print("Too many attempts.") 
except: 
    print("Invalid input. Try again")

print ("Thank you for using our system, bye...")




# while for infinite 
# while True:
#     print("This is me.....")
#     count = 0
#     while count < 3:
#         print(f"{count + 1}: This is me....")
#         count += 1
#         print("I am done...")
#         print("Part 2")       


# finite
count_outer = 0
while count_outer < 2:  # Set the desired number of outer loop iterations
    print("This is me.....")
    count_inner = 0
    while count_inner < 3:
        print(f"{count_inner + 1}: This is me....")
        count_inner += 1
    count_outer += 1
    print("I am done...")
    print("Part 2")

