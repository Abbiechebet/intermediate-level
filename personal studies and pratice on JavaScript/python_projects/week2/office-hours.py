# Mark wants to bake a cake, and he needs to buy ingredients. He has a list of three ingredients: flour, sugar, and eggs. 
# Mark has different priorities. First, he checks if he has enough flour. If he does, he'll bake the cake. If he doesn't 
# have enough flour, he checks if he has enough sugar. If he has enough sugar, he'll bake a different dessert. If he doesn't 
# have enough sugar, he checks if he has enough eggs. If he has enough eggs, he'll make scrambled eggs. If he doesn't have any 
# of these ingredients, he'll make a sandwich.
# Write a program to help Mark decide what to make based on his ingredient availability and priorities.

# Ingredient quantities
flour = int(input("Enter the quantity of flour (in cups): "))
sugar = int(input("Enter the quantity of sugar (in cups): "))
eggs = int(input("Enter the quantity of eggs: "))

# Check Mark's priorities
if flour >= 2:
    print("Mark can bake a cake!")
elif sugar >= 1:
    print("Mark can bake a different dessert.")
elif eggs >= 3:
    print("Mark can make scrambled eggs.")
else:
    print("Mark will make a sandwich.")



# Sophia is deciding what to wear based on the weather. She first checks if it's 
# sunny. If it is sunny, she wears a t-shirt and shorts. If it's not sunny, she 
# checks if it's rainy. If it's rainy, she wears a raincoat. If it's neither 
# sunny nor rainy, she wears a sweater.
# Weather conditions
is_sunny = input("Is it sunny? (yes/no): ").lower()
is_rainy = input("Is it rainy? (yes/no): ").lower()

# Decision based on weather conditions
if is_sunny == "yes":
    print("Sophia will wear a t-shirt and shorts.")
elif is_rainy == "yes":
    print("Sophia will wear a raincoat.")
else:
    print("Sophia will wear a sweater.")





# Tom is deciding what to eat for breakfast. He first checks if he has cereal. 
# If he has cereal, he eats cereal with milk. If he doesn't have cereal, he 
# checks if he has eggs. If he has eggs, he makes scrambled eggs. If he has 
# neither cereal nor eggs, he has toast.

# Ingredients availability
has_cereal = input("Do you have cereal? (yes/no): ").lower()
has_eggs = input("Do you have eggs? (yes/no): ").lower()

# Decision based on ingredient availability
if has_cereal == "yes":
    print("Tom will eat cereal with milk.")
elif has_eggs == "yes":
    print("Tom will make scrambled eggs.")
else:
    print("Tom will have toast.")




# Emma is deciding what book to read based on her mood. She first checks if she's 
# in the mood for a mystery novel. If she is, she reads a mystery book. If not, 
# she checks if she's in the mood for a fantasy novel. If she is, she reads a 
# fantasy book. If she's in the mood for neither, she reads a classic novel.

# Emma's mood
is_mood_for_mystery = input("Are you in the mood for a mystery novel? (yes/no): ").lower()
is_mood_for_fantasy = input("Are you in the mood for a fantasy novel? (yes/no): ").lower()

# Decision based on Emma's mood
if is_mood_for_mystery == "yes":
    print("Emma will read a mystery novel.")
elif is_mood_for_fantasy == "yes":
    print("Emma will read a fantasy novel.")
else:
    print("Emma will read a classic novel.")
