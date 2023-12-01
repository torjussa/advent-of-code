file = open("2-input.txt", "r")

numbers = []
sum = 0

for line in file:
	lineList = line.split(' ')
	print(lineList)
	minMax = lineList[0].split('-')
	requiredLetter = lineList[1][0]
	password = lineList[2].rstrip()
	occurances = password.count(requiredLetter)

	if (password[int(minMax[0])-1] == requiredLetter) != (password[int(minMax[1])-1] == requiredLetter): 
		sum+=1
		print("ok")



print sum