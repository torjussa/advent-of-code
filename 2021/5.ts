import { getInput } from "./utils/fileReader";

getInput(5).then( list => taskA(list))

const taskA = (list:string[]) => {
    //console.log(list)
    const splitted = list.map(row => row.split(' -> '))
    let map = new Map<string, number>()
    //console.log(splitted)

    
    for (let k = 0; k < splitted.length; k ++ ) {
        const points1 = splitted[k][0].split(',')
        const points2 = splitted[k][1].split(',')
        const point = {x1: parseInt(points1[0]), y1: parseInt(points1[1]), x2: parseInt(points2[0]), y2: parseInt(points2[1])}

        if (point.x1 == point.x2) {
            if (point.y2 > point.y1) {
                for (let i = 0; i<=point.y2-point.y1; i++) {   
                    const s  = point.x1 + "," + (point.y1 + i)
                    //@ts-ignore
                    map.has(s) ? map.set(s,map.get(s)+1) : map.set(s,1);
                }
            } else {
                for (let i = 0; i<=point.y1-point.y2; i++) {  
                    const s = point.x1 + "," + (point.y2 + i)
                    //@ts-ignore
                    map.has(s) ? map.set(s,map.get(s)+1) : map.set(s,1);
                }
            }
    }
        else if (point.y1 == point.y2) {
            if (point.x2 > point.x1) {
                for (let i = 0; i<=point.x2-point.x1;  i++) {
                    const s  = (point.x1+i) + "," +point.y1
                    //@ts-ignore
                    map.has(s) ? map.set(s,map.get(s)+1) : map.set(s,1);
                    
                }
            } else {
                for (let i = 0; i<=point.x1-point.x2; i++ ) {
                    const s  = (point.x2+i) + "," +point.y1
                    //@ts-ignore
                    map.has(s) ? map.set(s,map.get(s)+1) : map.set(s,1);
                }
            }
            //Diagonal
        } else if (Math.abs(point.x1-point.x2) == Math.abs(point.y1-point.y2)){
            console.log("diagonal: ",point)
            let xs = []
            let ys = []
            if (point.x1 > point.x2) {
                for (let i = point.x1; i>=point.x2; i--) {
                    xs.push(i)
                }
            } else {
                for (let i = point.x1; i<=point.x2; i++) {
                    xs.push(i)
                }
            }
            if (point.y1 > point.y2) {
                for (let i = point.y1; i>=point.y2; i--) {
                    ys.push(i)
                }
            } else {
                for (let i = point.y1; i<=point.y2; i++) {
                    ys.push(i)
                }
            }
            console.log('xs:', xs)
            console.log('ys:', ys)
            for (let i = 0; i< xs.length; i++ ) {
                const s  = xs[i] + "," +ys[i]
                //@ts-ignore
                map.has(s) ? map.set(s,map.get(s)+1) : map.set(s,1);
            }
        }
    }
    let i = 0
    for (const [key, value] of map) {
        console.log(key + ' = ' + value)
        if(value > 1) {
            i++
        }
      }
      console.log(i)

}

  