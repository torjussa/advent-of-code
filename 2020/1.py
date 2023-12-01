file = open("2-input.txt", "r")

numbers = []

for line in file:
    print(line)
    number = int(line.rstrip())
    numbers.append(number)

numbers.sort()

print(numbers)
for number1 in numbers:
    for number2 in numbers:
        for number3 in numbers:
            if number1 + number2 + number3 == 2020:
                print(number1*number2*number3)



