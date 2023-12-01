import { getInput } from "./utils/fileReader";

getInput(7).then( list => {taskA(list[0].split(',').map(Number))})

const taskA = (numbers: number[]) => {
   /* const sum = numbers.reduce((a,b) => a+b,0)
    const average = Math.floor(sum/numbers.length) /2*/
    let i = 0
    let consumptions = {}
    while ( i < numbers.length)
    {
        //@ts-ignore
        //consumptions[i] = calculateFuelUse(numbers, i )
        consumptions[i] = calculateNewFuelUse(numbers, i )
        i++
    }
    console.log(consumptions)

    
    
    

    
}

const calculateFuelUse = (numbers: number[], horizontalPosition: number) => {
    return numbers.reduce((sum, curr) => sum + Math.abs(curr-horizontalPosition), 0)
}
const calculateNewFuelUse = (numbers: number[], horizontalPosition: number) => {
    return numbers.reduce((sum, curr) =>
     sum + (Math.abs(curr-horizontalPosition) * (1 + Math.abs(curr-horizontalPosition)) /2), 0)
}

/*n * (n + 1) / 2)*/