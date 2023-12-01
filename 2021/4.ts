import { getInput } from "./utils/fileReader";

getInput(4).then(list => taskA(list))

interface Board {
    board: number[][]
}

const taskA = (list: string[]) => {
    //console.log(list)
    const randomNumbers = list[0].split(',').map(Number)

    let boards = list.reduce((acc, curr, i) => {
        if (i < 2) {
            return acc
        }
        else if (isEmpty(curr)) {
            acc.push([])
            return acc
        } else {
            const boardRow = curr.trim().split(/\s+/).map(Number)
            //@ts-ignore
            acc[acc.length-1].push(boardRow)
            return acc
        }

    }, [[]])
    let solvedBoards = new Array(boards.length).fill(false)

    randomNumbers.forEach(ran => {
         

        //console.log('ran:', ran)
        boards.forEach((board, boardNum) => {
            //console.log('board:', board)
            board.forEach((row, rowNum) => {
                //@ts-ignore
                row.forEach((num, i) => {
                    //console.log("num",num)
                    if (num === ran) {
                        //@ts-ignore
                        boards[boardNum][rowNum][i]= -1
                    }    
                })
            })
            //console.log(board)
            if (!solvedBoards[boardNum] && checkBoard(board)) {
                solvedBoards[boardNum] = true
                const boardSum = sumBoard(board)
                const res = ran * boardSum
                console.log(res)       
            }
            
        })

    })
    //console.log(boards)


}

const sumBoard = (board:  number [][]) => 
    board.reduce((acc, row) =>
        acc + row.reduce((a, num) => 
            num == -1 ? a : a + num
        , 0)
    ,0)

const checkBoard = (board:number[][]) => {
    console.log(board)
    let ys = [0,0,0,0,0]
    let res = false
    board.forEach((row) => {
        let xs = 0
        row.forEach((num, i) => {
            if (num == -1) {
                xs++
                ys[i]++


            }
        })
        if (xs == 5) {
            res = true
        } 
    })
    if (ys.includes(5)) {
        res = true
    }
    return res
}

function isEmpty(str:string) {
    return (!str || str.length === 0 );
}
