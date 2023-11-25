score = int(input("Please enter your exams score: "))
att = int(input("Please enter attendance score: "))

if score >= 70:
  if att >= 90:
     grade = "A++"
  elif att >= 80:
     grade = "A+"
  elif att >= 70:
    grade = "A-"
  else:
    grade = "A"
elif score >= 60:
  if att >= 90:
     grade = "B++"
  elif att >= 80:
     grade = "B+"
  elif att >= 70:
    grade = "B-"
  else:
    grade = "B"
elif score >= 50:
  if att >= 90:
     grade = "C++"
  elif att > 80:
     grade = "C+"
  elif att > 70:
      grade = "C-"
  else:
    grade = "C"
elif score >= 40:
  if att > 90:
     grade = "D++"
  elif att > 80:
    grade = "D+"
  elif att > 70:
    grade = "D-"
  else:
    grade = "D"
elif score >= 30:
  if att > 90:
     grade = "E++"
  elif att > 80:
     grade = "E+"
  elif att > 70:
    grade = "E-"
  else:
    grade = "E"
else:
  grade = "F"

print(f"Your grade is {grade}")