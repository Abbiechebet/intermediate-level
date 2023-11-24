# Follow the instructions in the tab to the right
# Write your code below

# Get a list of words from the user. In a loop, prompt the user for a word five times, and append each one to a list.
word_list = []
for _ in range(5):
    word = input("Enter a word: ")
    word_list.append(word)

# Write a loop over the list of words and find the one that's the longest.
longest_word = ""
for word in word_list:
    if len(word) > len(longest_word):
        longest_word = word

# Print the longest word
print(longest_word)