import { getInput } from "./utils/fileReader";

getInput(1).then(i => {
    TaskA(i)
    TaskB(i)
})


const TaskA = (input: string[]) => {
    const res = input.reduce((acc, curr) => {
        if (curr == "") {
            if (acc.sum > acc.max){
                return {max: acc.sum, sum: 0}
            } else {
                return {max: acc.max, sum: 0}
            }
        }
        return {max: acc.max, sum: acc.sum + parseInt(curr)}  

    }, {max: 0, sum: 0})
    console.log(res)
}

const TaskB = (input: string[]) => {
    const res = input.reduce((acc, curr) => {
        if (curr == "") {
            if (acc.max.some(val => val < acc.sum)){
                return {max: removeSmallest(acc.max).concat(acc.sum), sum: 0}
            } else {
                return {max: acc.max , sum: 0}
            }
        }
        return {max: acc.max, sum: acc.sum + parseInt(curr)}
        
    }, {max: [0,0,0], sum: 0})
    console.log(res)
    console.log(res.max.reduce((a,c) => a+c,0 ))
}

function removeSmallest(numbers : number[]) {
    const smallest = Math.min.apply(null, numbers);
    const pos = numbers.indexOf(smallest);
    return numbers.slice(0, pos).concat(numbers.slice(pos + 1));
};