import { getInput } from "./utils/fileReader";
import { findValueByPrefix } from "./utils/helperFuncs";

getInput(2).then(i => {
    console.log('a: ', Task(i, results))
    console.log('b: ', Task(i, results2))
})

const Task = (input: string[], results: any) => 
    input.reduce((sum, line) => sum + findValueByPrefix(results, line), 0)
   

const results = {
    'A X': 1 + 3,
    'A Y': 2 + 6,
    'A Z': 3 + 0,
    'B X': 1 + 0,
    'B Y': 2 + 3,
    'B Z': 3 + 6,
    'C X': 1 + 6,
    'C Y': 2 + 0,
    'C Z': 3 + 3,
}

const results2 = {
    'A X': 3 + 0,
    'A Y': 1 + 3,
    'A Z': 2 + 6,
    'B X': 1 + 0,
    'B Y': 2 + 3,
    'B Z': 3 + 6,
    'C X': 2 + 0,
    'C Y': 3 + 3,
    'C Z': 1 + 6,
}

/*
X means you need to lose, 
Y means you need to end the round in a draw, and 
Z means you need to win
*/


