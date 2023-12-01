file = open("9-input.txt", "r")


numbers = []

sum2= 36845998

for line in file:
	if not int(line.rstrip()) > sum2/2:
		numbers.append(int(line.rstrip()))


def isOK(numbers, sum):
	for i in numbers:
		for j in numbers:
			if j+i == sum:
				return True
	return False

done = False
i=0
list_i=1
res = 0
mx = numbers[i]
mn = numbers[i]
while not done:
	res+= numbers[list_i]
	mx = max(mx,numbers[list_i])
	mn = min(mn, numbers[list_i])
	if res > sum2:
		res= 0
		i+=1
		list_i=i+1
		mx=numbers[i]
		mn=numbers[i]
	elif res == sum2:
		done=True
	else:
		list_i+=1



	


#print("Res 1: ", numbers[i-1])
print("Res 2", mn + mx)
# 36845998