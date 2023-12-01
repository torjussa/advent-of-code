import { getInput } from "./utils/fileReader";
import { listOfStringsToNumberMatrix } from "./utils/helperFuncs";

getInput(8).then(input => {
    console.log(
        'res A: ',
        task(listOfStringsToNumberMatrix(input))
    )
})


const task = (matrix: number[][]) => {
    //console.log(matrix)
    var count = 0
    for (let y = 0; y< matrix[0].length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            if (isVisible(matrix[y][x], x, y, matrix)) {
                count ++
            }
        }
    }
    return count
}


const isVisible = (val: number, x: number, y: number, matrix: number[][]) => {
    if (x == 0 || x == matrix[0].length - 1 || y == 0 || y == matrix.length - 1) {
        return true
    }
    if (
        isVisibleLeft(matrix, val, x, y) ||
        isVisibleRight(matrix, val, x, y) ||
        isVisibleUp(matrix, val, x, y) ||
        isVisibleDown(matrix, val, x, y)
    ) {
       console.log( x, ",", y, " is visible") 
        return true
    }

    return false

}
//@ts-ignore
const isVisibleRight = (matrix, val, x1, y) => { 
    for (let x = x1 + 1; x < matrix[0].length; x += 1) {
        if (matrix[y][x] >= val) {
            return false
        }
    }
    return true
}
//@ts-ignore
const isVisibleLeft = (matrix, val, x1, y) => { 
    for (let x = x1 - 1; x >=0 ; x -= 1) {
        if (matrix[y][x] >= val) {
            return false
        }
    }
    return true
}
//@ts-ignore
const isVisibleDown = (matrix, val, x, y1) => { 
    for (let y = y1 + 1; y < matrix.length; y += 1) {
        if (matrix[y][x] >= val) {
            return false
        }
    }
    return true
}
//@ts-ignore
const isVisibleUp = (matrix, val, x, y1) => { 
    for (let y = y1 - 1; y >=0 ; y -= 1) {
        if (matrix[y][x] >= val) {
            return false
        }
    }
    return true
}
