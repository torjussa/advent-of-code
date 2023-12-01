export const listToMap = (list: string[], splitOn=" ") => {
    var dict = new Map()

    for (const kvp in list) {
        const arr = kvp.split(splitOn)
        dict.set(arr[0], arr[1])
    }
    return dict
}

export const stringToNumbers = (list: string[]) => list.map(s => parseInt(s))

export const listToListOfStringAndNumber = (list: string[]) => list.map(list => list.split(' '))