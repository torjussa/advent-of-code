file = open("16-input.txt", "r")

rules = {}
allRules = []

validTickets = []
ruleTranslator = {}


def addRule(ranges, name, i):
	rules[name] = []
	print(rules)
	for rng in ranges:
		rng = rng.split('-')
		rules[name].extend(range(int(rng[0]), int(rng[1])))
		allRules.extend(range(int(rng[0]), int(rng[1])))
		ruleTranslator[name] = i

for index, line in enumerate(file): 
	if index < 20:
		s = line.split(':')
		r = s[1].strip().split(' or ')
		addRule(r, s[0], index)


	elif index == 22:
		print(line)

	elif index > 24:
		valid = True
		numbers = line.split(',')
		for num in numbers:
			if int(num) not in allRules:
				valid = False
		if valid:
			validTickets.append(numbers)
print(validTickets)





