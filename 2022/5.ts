import { getInput } from "./utils/fileReader"

getInput(5).then(i => {
    task(i)
})


const task = (i:string []) => {

    //A
    var containers = createContainers(i.slice(0,8))
    let movedContainers = doMovements(containers,i.slice(10))
    movedContainers.map(stack => console.log(stack.pop()))
    
    //B
    var containers = createContainers(i.slice(0,8))
    let movedContainersB = doMovementsB(containers,i.slice(10))
    movedContainersB.map(stack => console.log(stack.pop()))
}


const createContainers = ( list: string[] ) => {
    var containers: string[][] = [[],[],[],[],[],[],[],[],[]]

    list.forEach( (row, x) => {
        console.log(row)
        for (let i = 0; i < row.length; i++) {
            if ((i+3)%4 == 0 ) {
                const letter = row[i]
                if (letter !=' ') {
                    containers[(i-1)/4].unshift(letter)
                }   
            }
        }
    })
    return containers
}

const doMovements = (containers: string[][] , movements: string []) => {
    movements.forEach(move => {
        const actions = move.split(' ')
        const moves = parseInt(actions[1])
        const from = parseInt(actions[3]) -1
        const to = parseInt(actions[5]) -1
        for (let i = 0; i< moves; i++) {
            if (containers[from].length >0) {
                //@ts-ignore
                containers[to].push(containers[from].pop())
            }

        }
    })
    return containers

}

const doMovementsB = (containers: string[][] , movements: string []) => {
    movements.forEach(move => {
        const actions = move.split(' ')
        const moves = parseInt(actions[1])
        const from = parseInt(actions[3]) -1
        const to = parseInt(actions[5]) -1
        const stackLen = containers[from].length
        if (stackLen> 0) {
           const removed =  containers[from].splice((Math.min(stackLen - moves, stackLen)))
           containers[to].push(...removed)

        }

       

    })
    return containers

}


