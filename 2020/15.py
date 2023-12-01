data = [15,5,1,4,7,0]

positions = {x: i for i, x in enumerate(data)}

for i in range(len(data)-1, 30000000):
	if data[i] in positions:
		data.append(i-positions[data[i]])
	else:
		data.append(0)
	positions[data[i]] = i


print("2020th: ", data[2019])
print("30millth: ", data[-2])