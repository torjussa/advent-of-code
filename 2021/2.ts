import { getInput } from "./utils/fileReader";

const taskA = getInput(2).then( list =>
    list.reduce((prev, curr ) => {
        const direction = curr.split(' ')[0]
        const distance = parseInt(curr.split(' ')[1])
        
        if (direction == 'forward') return { ...prev, forward: prev.forward + distance}
        else if (direction == 'up') return { ...prev, depth: prev.depth - distance}
        else return { ...prev, depth: prev.depth + distance}

    }, {depth: 0, forward: 0})
)

taskA.then(r => console.log("A", r.depth*r.forward))


const taskB = getInput(2).then( list =>
    list.reduce((prev, curr ) => {
        const direction = curr.split(' ')[0]
        const value = parseInt(curr.split(' ')[1])
        
        if (direction == 'forward') return { ...prev, forward: prev.forward + value, depth: prev.depth + prev.aim*value}
        else if (direction == 'up') return { ...prev, aim: prev.aim - value }
        else return  { ...prev, aim: prev.aim + value }

    }, {depth: 0, forward: 0, aim: 0})
)

taskB.then(r => console.log("B", r.depth*r.forward))