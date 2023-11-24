# See the Instructions tab.
# Scroll down to see where you should write your solution
roster = [
  "Thibaut Courtois",
  "Dani Carvajal",
  "Brahim Díaz",
  "Éder Militão",
  "Jesús Vallejo",
  "Nacho",
  "Eden Hazard",
  "Toni Kroos",
  "Karim Benzema",
  "Takefusa Kubo",
  "Álvaro Odriozola",
  "Luka Modrić",
  "Marco Asensio",
  "Marcelo",
  "Andriy Lunin",
  "Martin Ødegaard",
  "Casemiro",
  "Federico Valverde",
  "Luka Jović",
  "Sergio Ramos",
  "Lucas Vázquez",
  "Gareth Bale",
  "Dani Ceballos",
  "Vinícius Júnior",
  "Raphaël Varane",
  "Rodrygo",
  "Isco",
  "Ferland Mendy",
  "Mariano"
]

# Write your solution below
# Print out the names of the players using a for loop
print("The current Real Madrid roster:\n")
for player in roster:
  # print()
  print (player)

print("\n------")

# Use pop() to remove players from the roster.

# players_to_remove = [
#   "Martin Ødegaard",
#   "Raphaël Varane",
#   "Brahim Díaz",
#   "Sergio Ramos",
#   "Takefusa Kubo",
#   "Álvaro Odriozola"
# ]

# # Remove players using pop()
# for player in players_to_remove:
#   try:
#       roster.remove(player)
#       print(f"Removed {player} from the roster.")
#   except ValueError:
#       print(f"{player} not found in the roster.")

# print("\nUpdated Roster:")
# print(roster)

indices_to_remove = [2, 9, 10, 15, 19, 24]

# Create a list to store the removed players
removed_players = []

# Remove players using pop() and add them to the removed_players list
for index in sorted(indices_to_remove, reverse=True):
    removed_players.append(roster.pop(index))

# Print the players that have been removed

# print("The players the team is dropping are:")
# for player in removed_players:
#     print(player)

# Print the updated roster

# print("\nUpdated Roster: \n")
# for player in roster:
#     print(player)


# Players to add
# players_to_add = ["Eduardo Camavinga", "David Alaba"]
# roster.extend(players_to_add)

# Use append() to add players to the roster.
roster.append("Eduardo Camavinga")
roster.append( "David Alaba")
print("\nThe new Real Madrid roster:\n")
for player in roster:
  # print()
  print(player)