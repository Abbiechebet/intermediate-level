# this is a multiline string; it starts with three quotes
blank_board = """
  1   2   3
1   |   |  
--- --- ---
2   |   |  
--- --- ---
3   |   |  
"""

# start your code here
name = input("what is your name? ")
print(f"Welcome to Tic Tac Toe, {name}. Here is our playing board:")
print(blank_board) 
position = input ("Enter a position (i.e., 1,1): ")
print (position)