file = open("14-input.txt", "r")

memory = {}
mask = ''

def writePermutations(res, number):
	if res.count('X') == 0:
		memory[int(res,2)] = number
	else:
		for i in range(len(res)):
			if res[i] == 'X':
				writePermutations(res[:i]+ '1'+ res[i+1:], number)
				writePermutations(res[:i]+ '0'+ res[i+1:], number)
				break

def writeToMemory(mask, number, address):
	base2 = bin(address)[2:]
	diff = len(mask) - len(base2)
	base2 = '0'*diff + base2
	res=''
	for i in range(0, len(mask)):
		if mask[i] == 'X' or mask[i] == '1':
			res+= mask[i]
		else:
			res+= base2[i]
	writePermutations(res, number)	


for line in file:

	txt = line.split('=')
	txt[0] = txt[0].strip()
	txt[1] = txt[1].strip()
	if txt[0] == 'mask':
		mask = txt[1]
	else:
		mem = int(txt[0][4:-1])
		number = int(txt[1])
		writeToMemory(mask, number, mem)


print(memory)
print("2: ", sum(memory.values()))
