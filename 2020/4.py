file = open("4-input.txt", "r")

def evaluateFields(passport):
	if len(passport) == 8:
		return True
	if len(passport) == 7:
		for field in passport:
			if field.split(':')[0] == 'cid':
				return False
		return True	
	return False


###

#byr (Birth Year) - four digits; at least 1920 and at most 2002.
#iyr (Issue Year) - four digits; at least 2010 and at most 2020.
#eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
#hgt (Height) - a number followed by either cm or in:
#If cm, the number must be at least 150 and at most 193.
#If in, the number must be at least 59 and at most 76.
#hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
#ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
#pid (Passport ID) - a nine-digit number, including leading zeroes.
#cid (Country ID) - ignored, missing or not.
###
def isFieldValid(field):
	i = field[0]
	data = field[1]
	if i == 'byr':
		return 1920 <= int(field[1]) <= 2002
	elif i == 'iyr':
		return 2010 <= int(field[1]) <= 2020
	elif i == 'eyr':
		return 2020 <= int(field[1]) <= 2030
	elif i == 'hgt':
		text = data[-2:]
		if not data[:-2].isdigit():
			print("Start is not digit")
			return False
		number = int(data[:-2])
		if (text != 'cm') and (text != 'in'):
			print("Not ending with in/cm")
			return False
		if text == 'cm':
			return 150 <= number <= 193
		if text == 'in':
			return 59 <= number <= 76
		return False
	elif i == 'hcl':
		if data[0] != '#':
			print("first is not #")
			return False
		if len(data) == 7:
			return True

	elif i == 'ecl':
		ok = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
		return data in ok
	elif i == 'pid':
		if len(data) == 9 and data.isdigit():
			return True
		return False
		
	return True




def evaluateData(passport):
	for field in passport:
		if not isFieldValid(field.split(':')):
			print(field + " not valid")
			return False
	return True




valid = 0
passport = []
for line in file:
	if line == '\n':
		print(passport)
		if evaluateFields(passport):
			if evaluateData(passport):
				valid+=1
				print("ok")
		passport = []
	else:
		fields = line.rstrip().split(' ')
		for field in fields:
			passport.append(field)


print(valid)
print("test")
print('cat' in ['cat', 'no'])