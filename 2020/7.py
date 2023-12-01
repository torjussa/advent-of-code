file = open("7-input.txt", "r")

rules = {}

# vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
# faded blue bags contain no other bags.
# dotted black bags contain no other bags.

def getContent(bagType, contentString):
	ruleStrings = contentString.split(',')
	rules[bagType] = {}
	for rule in ruleStrings:
		word = rule.split(" ")
		rules[bagType][word[2]+ " "+word[3]] =  int(word[1])

for line in file:
	wordList = line.split(" ")
	bagType = wordList[0] + " "+ wordList[1]
	if wordList[4] == 'no':
		rules[bagType]= {}
	else:
		getContent(bagType, line.split("contain")[1])

total = 0

canHold={}

for key in rules:
	if 'shiny gold' in rules[key].keys():
		canHold[key]= rules[key]['shiny gold']

for x in range(0,500):
	for k1, v1 in rules.items():	
		for k2, v2 in v1.items():
			if k2 in canHold.keys():
				canHold[k1] = "x"


for 

# print(rules)
print("Can hold")
print(canHold)
print(len(canHold))

