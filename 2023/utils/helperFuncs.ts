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
export const listToListOfStrings = (list: string[]) => list.map(list => {
        const letters = list.split('')
        return letters.map(l => [l])
    }
    )

export const listOfStringsToNumberMatrix = (list: string[]) => list.map(row => {
    var list: number [] = []
    for (let i = 0; i < row.length; i++) {
        const num = row[i]   
        //
        list.push(parseInt(num))
    }
    return list
}
)

//@ts-ignore
export function findValueByPrefix(object, prefix) {
    for (var property in object) {
      if (object.hasOwnProperty(property) && 
         property.toString().startsWith(prefix)) {
         return object[property];
      } 
    }
  }

export function hasDuplicates(a: string[]) {
    const noDups = new Set(a);
    return a.length !== noDups.size;
  }
  
