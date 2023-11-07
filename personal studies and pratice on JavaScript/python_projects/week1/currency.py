# Use this exchange rate
NAIRA_PER_DOLLAR = 410.59  # exchange rate as of Nov 10 2021
USD = float(input("enter amount of USD to convert to NGN: "))
value = USD * NAIRA_PER_DOLLAR
print(f"{USD:.2f} is {value:.2f} NGN")