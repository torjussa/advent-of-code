file = open("5-input.txt", "r")





def getRow(letters):
	numbers = range(0,128)
	for i in range(0, len(letters)):
		if letters[i] == 'F':
			numbers = numbers[:(len(numbers)/2)]
		else:
			numbers = numbers[(len(numbers)/2):]
	return numbers[0]




def getSeat(letters):
	numbers = range(0,8)
	for i in range(0, len(letters)):
		if letters[i] == 'L':
			numbers = numbers[:(len(numbers)/2)]
		else:
			numbers = numbers[(len(numbers)/2):]
	return numbers[0]

res = 0
seats = []
for line in file:
	row = getRow(line.rstrip()[:-3])
	seat = getSeat(line.rstrip()[-3:])
	
	res = max(res, row*8 + seat)
	seats.append(row*8 + seat)
	

seats.sort()
prev = seats[0]-1
for seat in seats:
	if seat-1 != prev:
		print("Missing", seat-1) 
	prev = seat


print("max seat: ", res)


