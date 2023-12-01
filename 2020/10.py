file = open("10-input.txt", "r")


numbers = []

for line in file:
	num = int(line.rstrip())
	numbers.append(num)
	
numbers.sort()

#--

ones = 0
threes = 0

jolts = 0

for number in numbers:
	if number - jolts == 1:
		ones +=1
	if number - jolts == 3:
		threes +=1
	jolts = number

threes +=1
print("1: ", ones*threes)

#-- Create tree


addedNumbers = [0]
tree = {0: []}

print(numbers)

for number in numbers:
	for added in addedNumbers:
		if number - added < 4:
			tree[added].append(number)
	tree[number] = []
	addedNumbers.append(number)


tree[numbers[-1]].append(numbers[-1]+3)

lastNumber = numbers[-1]+3
print(tree)

# -- count paths


memo = {}

def getNofPaths(children, first):
	stringified = str(children)
	if stringified in memo:
		return memo[stringified]
	
	res = len(children)-1
	
	if first:
			res+=1

	for key in children:		
		if key == lastNumber:
			return 0
		res += getNofPaths(tree[key], False)
	memo[stringified] = res
	return res



res = getNofPaths(tree[0], True)

print("antall veier", res)







