from gtts import gTTS

# Create a story with placeholders for user input
story = "Once upon a time, in a {adjective} land, there lived a {animal}. " \
        "This {animal} had a {color} {body_part} and loved to eat {food}. " \
        "One day, {name} found a {noun} and decided to {verb} it. " \
        "The end."

# Prompt the user for input
adjective = input("Enter an adjective: ")
animal = input("Enter an animal: ")
color = input("Enter a color: ")
body_part = input("Enter a body part: ")
food = input("Enter a type of food: ")
name = input("Enter a name: ")
noun = input("Enter a noun: ")
verb = input("Enter a verb: ")

# Fill in the story with user input
story = story.format(adjective=adjective,
                     animal=animal,
                     color=color,
                     body_part=body_part,
                     food=food,
                     name=name,
                     noun=noun,
                     verb=verb)

# Print the full story
print(story)

# Create an audio file and play it
tts = gTTS(story)
tts.save('mad_lib_story.mp3')