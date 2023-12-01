import { getInput } from "./utils/fileReader";
import { listToListOfStrings } from "./utils/helperFuncs";

getInput(24, true).then(input => {
    task(input)

})

const task = (input: any) => {
    const width = input[0].length
    const height = input.length
    let minute = 0
    let valley = listToListOfStrings(input)

    //console.log(valley)

    valley = runMinute(0, valley)

    console.log(valley)



}

const runMinute = (prevMinute: number, valley: string[][][]) => {
    for (let y = 1; y < valley.length-1; y++) {
        let row = valley[y];
        for (let x = 1; x < row.length-1; x++) {
            let locationArray = valley[y][x]
            valley[y][x].push (
                getNextLocation( // must consider walls
                    valley[y-1][x][prevMinute],
                    valley[y+1][x][prevMinute],
                    valley[y][x-1][prevMinute],
                    valley[y][x+1][prevMinute])
            )

        }

    }

    return valley
}

const getNextLocation = (over: string, under: string, left: string, right: string) => {
    let res = ""
    if (over.includes('v')) { res += 'v'}
    if (under.includes('^')) { res += '^'}
    if (left.includes('>')){ res += '>'}
    if (right.includes('<')) {res += '<'}
    if (res == "") {return "."}
    return res

}

