width = float(input("enter width of the room: "))
height= float(input("enter height of the room: "))
number_of_people = int(input("enter number of people in the room: "))
horsepower = (width * height *  0.1) + (number_of_people * 0.06)
print(f"The required horsepower is: {horsepower:.2f}") 