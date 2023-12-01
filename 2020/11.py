import copy
file = open("11-input .txt", "r")

seats=[]

for line in file:
	seats.append(list("."+line.rstrip()+"."))


emptySeatRow = list("."*len(seats[0]))
seats.insert(0, emptySeatRow)
seats.append(emptySeatRow)

def printBoard(board):
	for row in board:
		print("".join(row)) 

def countOccupiedSeats(seats):
		res = 0
		for row in seats:
			res += row.count('#')
		return res


printBoard(seats)

MAXROW, MAXCOL = len(seats) - 1, len(seats[0]) - 1

deltas = [
    (-1, -1),
    (-1, 0),
    (-1, 1),
    (0, -1),
    (0, 1),
    (1, -1),
    (1, 0),
    (1, 1),
]

def isOccupiedDirection(x,y,dx,dy):
	#print(x,y,dx,dy)
	#print(MAXROW, MAXCOL)
	if not ((0 <= x+dx < MAXCOL) and (0 <= y+dy <=MAXROW)):
		return False
	if seats[x+dx][y+dy] == 'L':
		return False
	if seats[x+dx][y+dy] == '#':
		return True
	return isOccupiedDirection(x+dx, y+dy, dx, dy)

def allAdjacentAreEmpty(row, seat):
	for dx,dy in deltas:
		if isOccupiedDirection(row, seat, dx, dy):
			return False
	return True


def nOrMoreAreOccupied(row, seat, n):
	occupied = 0
	for dx,dy in deltas:
		if isOccupiedDirection(row, seat, dx, dy):
			occupied+=1
	return occupied >= n 

done = False
while not done:
	changedSeats = False
	newSeats = copy.deepcopy(seats)
	for row in range(len(seats)):
		for seat in range(len(seats[row])):
			if seats[row][seat] == 'L':
				if allAdjacentAreEmpty(row, seat):
					newSeats[row][seat] = '#'
					changedSeats = True

			if seats[row][seat] == '#':
				if nOrMoreAreOccupied(row, seat, 5):
					newSeats[row][seat] = 'L'
					changedSeats = True
	
	seats = copy.deepcopy(newSeats)
	printBoard(seats)
	print(countOccupiedSeats(seats))
	if not changedSeats:
		done = True



printBoard(seats)
print(countOccupiedSeats(seats))

