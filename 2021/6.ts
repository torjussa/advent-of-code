import { Cipher } from "crypto";
import { getInput } from "./utils/fileReader";

getInput(6).then( list => taskA(list[0].split(',').map(Number)))



const taskA = (numbers: number[]) => {
    const lanternfishes = numbers.reduce((map, fish) => {
        //@ts-ignore
        map[fish] +=1
        return map
    },[0,0,0,0,0,0,0,0,0])
    const fishes = findLanterfish(lanternfishes, 0)
    //@ts-ignore
    console.log(fishes.reduce((a,b) => a+b, 0))
}

const findLanterfish = (fishes: number[], day: number): any => {
    console.log('Day: ', day)
    console.log(fishes)
    
    if (day == 256) {
        return fishes
    }
    const zeroFishes = fishes.shift()
    //@ts-ignore
    fishes.push(zeroFishes)
    //@ts-ignore
    fishes[6] += zeroFishes

    return findLanterfish(fishes, day+1)
}

let memo: any = {}