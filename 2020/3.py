file = open("3-input.txt", "r")

map = []
sum11 = 0
sum31 = 0
sum51 = 0
sum71 = 0
sum12 = 0

for line in file:
	map.append(line.rstrip())

file.close()
width = len(map[0])
height = len(map)

xPos = 0
for y in range(0,height):
	position = map[y][xPos%width]
	if position == '#':
		sum31+=1
	xPos +=3

xPos = 0
for y in range(0,height):
	position = map[y][xPos%width]
	if position == '#':
		sum11+=1
	xPos +=1

xPos = 0
for y in range(0,height):
	position = map[y][xPos%width]
	if position == '#':
		sum51+=1
	xPos +=5

xPos = 0
for y in range(0,height):
	position = map[y][xPos%width]
	if position == '#':
		sum71+=1
	xPos +=7

xPos = 0
for y in range(0,height):
	if y%2==0:
		position = map[y][xPos%width]
		if position == '#':
			sum12+=1
		xPos +=1


print(sum11*sum31*sum51*sum71*sum12)




