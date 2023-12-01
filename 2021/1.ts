
import { getInput } from "./utils/fileReader";
import { stringToNumbers } from "./utils/helperfuncs";


getInput(1).then( list => console.log('a: ',
    stringToNumbers(list).reduce((acc, val) => 
        val > acc.prev ? {prev: val, increases: acc.increases +1} : {prev: val, increases: acc.increases}
        , {prev: Number.MAX_VALUE, increases: 0 }).increases
    )
)

getInput(1).then( list => console.log('b: ',
    stringToNumbers(list).reduce((acc, val) => 
        val+acc.prev1+acc.prev2 > acc.prev1+acc.prev2+acc.prev3 ?
            {prev1: val, prev2:acc.prev1, prev3:acc.prev2, increases: acc.increases +1}
            : {prev1: val, prev2:acc.prev1, prev3:acc.prev2, increases: acc.increases}
        , {prev1: Number.MAX_VALUE, prev2:Number.MAX_VALUE, prev3:Number.MAX_VALUE, increases: 0 }).increases
    )
)

/*
document.body.innerText.split('\n').map(s => parseInt(s)).reduce((acc, val) => val+acc.prev1+acc.prev2 > acc.prev1+acc.prev2+acc.prev3  ?  
val > acc.prev1 ? {a:acc.a + 1, b: acc.b+1, prev1: val, prev2: acc.prev1, prev3: acc.prev2} : {a:acc.a, b: acc.b+1, prev1: val, prev2: acc.prev1, prev3: acc.prev2}
: val > acc.prev1 ? {a:acc.a + 1, b: acc.b, prev1: val, prev2: acc.prev1, prev3: acc.prev2} : {a:acc.a, b: acc.b, prev1: val, prev2: acc.prev1, prev3: acc.prev2}
,{a: 0, b:0, prev1: Number.MAX_VALUE, prev2: Number.MAX_VALUE, prev3: Number.MAX_VALUE})


document.body.innerText.split('\n').map(Number).reduce((ac, val, i, ar) => 
    val+ar[i-1]+ar[i-2] > ar[i-1]+ar[i-2]+ar[i-3] ?
     val > ar[i-1]  ? {a: ac.a+1, b: ac.b+1}
    : {...ac, b: ac.b+1} :  val > ar[i-1] ? {...ac, a: ac.a+1} : ac 
     , {a: 0, b: 0})
*/


const animals = [
    {
        name: 'horse',
        predator: false
    },
    {
        name: 'wolf',
        predator: true 
    },
    {
        name: 'tiger',
        predator: true
    }
]  
