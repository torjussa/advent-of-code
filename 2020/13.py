import sys
file = open("13-test.txt", "r")

data=[]

for line in file:
	data.append(line.rstrip())

#test
#data[1] = '67,7,59,61'

# fasit : 725850285300475
busses = []
gap = 1
gaps = []
for bus in data[1].split(','):
	if bus != 'x':
		
		busses.append(int(bus))
		gaps.append(gap)
		gap = 1
	else:
		gap += 1


file.close()
print(busses)
print(gaps)


def findFirstGap(bus1, bus2, gap, time):
	for i in range (time,2147483647 , bus1):
		if (i + gap) % bus2 == 0:
			#print(i)
			return i


def checkRestOfBusses (time):
	for i in range(2,len(busses)):
		time += gaps[i]
		if not time % busses[i] == 0:
			return False
		elif i == 2:
			print(time)
	return True

done = False
time = 0
firstBusTime = 0


while not done:
	firstBusTime = findFirstGap(busses[0], busses[1], gaps[1], firstBusTime)

	done = checkRestOfBusses(firstBusTime + gaps[1])
	#print(time)

	firstBusTime += busses[0]
	

print(firstBusTime - busses[0])
#print(time2 - gap2 - gaps[0] - gaps[1]) 



	



