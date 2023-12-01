import { getInput } from "./utils/fileReader";
import { listOfStringsToNumberMatrix } from "./utils/helperFuncs";

getInput(8).then(input => {
    console.log(
        'res B: ',
        task(listOfStringsToNumberMatrix(input))
    )
})


const task = (matrix: number[][]) => {
    //console.log(matrix)
    var max = 0
    for (let y = 0; y< matrix[0].length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            const vis = visibility(matrix[y][x], x, y, matrix)
            console.log(x, ', ', y, ' - max: , ', vis)
            if (vis > max ) {
                max = vis
            
            }
        }
    }
    return max
}


const visibility = (val: number, x: number, y: number, matrix: number[][]) => {
    if (x == 0 || x == matrix[0].length - 1 || y == 0 || y == matrix.length - 1) {
        return 0
    }
    console.log(visibilityLeft(matrix, val, x, y))
    console.log(visibilityRight(matrix, val, x, y))
    console.log(visibilityDown(matrix, val, x, y))
    console.log(visibilityUp(matrix, val, x, y))


    return  visibilityLeft(matrix, val, x, y) *
        visibilityRight(matrix, val, x, y) *
        visibilityUp(matrix, val, x, y) *
        visibilityDown(matrix, val, x, y)
   
}
//@ts-ignore
const visibilityRight = (matrix, val, x1, y) => { 
    for (let x = x1 + 1; x < matrix[0].length; x += 1) {
        if (matrix[y][x] >= val) {
            return x-x1
        }
    }
    return matrix[0].length - x1 -1

}
//@ts-ignore
const visibilityLeft = (matrix, val, x1, y) => { 
    for (let x = x1 - 1; x >=0 ; x -= 1) {
        if (matrix[y][x] >= val) {
            return x1 -x
        }
    }
    return x1
}
//@ts-ignore
const visibilityDown = (matrix, val, x, y1) => { 
    for (let y = y1 + 1; y < matrix.length; y += 1) {
        if (matrix[y][x] >= val) {
            return y-y1
        }
    }
    return matrix.length - y1 -1
}
//@ts-ignore
const visibilityUp = (matrix, val, x, y1) => { 
    for (let y = y1 - 1; y >=0 ; y -= 1) {
        if (matrix[y][x] >= val) {
            return y1-y
        }
    }
    return y1
}
