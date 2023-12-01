file = open("8-input.txt", "r")


instructions = []


for line in file:
	instructions.append(line.rstrip())


fin = False
swapped = []
while not fin:
	done = []
	performedSwap = False
	i = 0
	acc = 0

	while i not in done:
		if instructions[i] == 'done':
			fin = True
			print("DONE", acc)

		done.append(i)
		instruction = instructions[i].split(" ")


		if instruction[0] == 'nop':
			if i not in swapped and not performedSwap:
				swapped.append(i)
				i+= int(instruction[1])
				performedSwap= True
				
			else:
				i+=1
			
		elif instruction[0] == 'acc':
			i+=1
			acc+= int(instruction[1])
		elif instruction[0] == 'jmp':
			if i not in swapped and not performedSwap:
				swapped.append(i)
				i+=1
				performedSwap= True
			else:
				i+= int(instruction[1])
	print("accumulator: ", acc)		




