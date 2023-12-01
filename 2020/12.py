import copy
file = open("12-input.txt", "r")

instructions = []
position = [0,0]
waypoint = [10, 1]
direction = 90

def travel(distance):
	position[0] += waypoint[0]*distance
	position[1] += waypoint[1]*distance

def changeWaypoint(d, value):
	if d == 'E':
		waypoint[0] += value
	if d == 'N':
		waypoint[1] += value
	if d == 'S':
		waypoint[1] -= value
	if d == 'W':
		waypoint[0] -= value

def turn(turnWay, value):
	oldWaypoint = waypoint.copy()
	if value == 180:
		waypoint[0] = waypoint[0]*-1
		waypoint[1] = waypoint[1]*-1
	elif (turnWay == 'R' and value == 90) or(turnWay == 'L' and value == 270) :
		waypoint[0] = oldWaypoint[1]
		waypoint[1] = oldWaypoint[0]*-1
	elif (turnWay == 'L' and value == 90) or(turnWay == 'R' and value == 270) :
		waypoint[0] = oldWaypoint[1]*-1
		waypoint[1] = oldWaypoint[0]
	

for line in file:
	action = line[:1]
	value = int(line.rstrip()[1:])
	instructions.append([line[:1], int(line.rstrip()[1:])])

	if action == "F":
		travel(value)

	elif action == "R":
		turn('R', value)
	elif action == "L":
		turn('L', value)
	

	else:
		changeWaypoint(action, value)


print(position)
print("2: ", abs(position[0]) + abs(position[1]))





