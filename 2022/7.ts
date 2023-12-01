import { getInput } from "./utils/fileReader";

getInput(7).then (i => {
    console.log(task(i))
})


function task( input : string[]) {
    const d : {[key: string]: number} = {};
    const c : Array<string> = [];
    input.forEach((l) => {
        if (l.startsWith('$ cd ')) {
            l.includes('..') ? c.pop() : c.push(l.split('$ cd ')[1]);
        } else if (/^\d/.test(l)) {
            const a : Array<string> = [...c];
            while (a.length) {
                const k = a.join('_');
                d[k] = (d[k] || 0) + Number(l.split(' ')[0]);
                a.pop();
            }
        }
    });
    return Int32Array.from(Object.values(d))
       // .filter(v => v >= 30000000 - (70000000 - d['/']))
         .filter(v => v >= 30000000 - (70000000 - d['/']))
        .sort()[0];
}