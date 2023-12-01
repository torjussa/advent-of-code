file = open("6-input.txt", "r")
#print(file.read())

def intersection(lst1, lst2): 
    lst3 = [value for value in lst1 if value in lst2] 
    return lst3 

sum = 0
letters = []
for aline in file:
    print(aline)
    if aline == '\n':
    	print("letters: ", letters)
    	if len(letters) == 1:
    		print("The length was one, adding; ", len(letters[0]))
    		sum += len(letters.pop())
    	else:	
	    	unique = letters.pop()
	    	for llist in letters:
	    		unique = intersection(unique, llist)
	    	print("Unique: ",unique)
	    	print("The length was not one, adding; ", len(unique))
	    	sum += len(unique)
	   	letters = []
	   	unique = []
	   	print(sum)
	   	print('------')
    else:
    	letters.append(list(aline.rstrip()))

file.close()	
print(sum)


