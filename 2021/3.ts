import { getInput } from "./utils/fileReader";

getInput(3).then( list => {
      const onesandzeros = list.reduce( (acc,  val) =>
         val.split('').reduce((acc2, letter, i) => {
            if (letter == '1') acc2[i].one +=1
            else if (letter == '0') acc2[i].zero +=1
            return acc2
         }, acc)
    , [{zero:0, one: 0}, {zero:0, one: 0}, {zero:0, one: 0}, {zero:0, one: 0}, {zero:0, one: 0},{zero:0, one: 0},
        {zero:0, one: 0}, {zero:0, one: 0}, {zero:0, one: 0}, {zero:0, one: 0}, {zero:0, one: 0}, {zero:0, one: 0}])

    const gamma = onesandzeros.reduce((acc, curr) => 
        curr.one > curr.zero ? acc.concat('1') : acc.concat('0')
    , '')

    const epsilon = onesandzeros.reduce((acc, curr) => 
            curr.one > curr.zero ? acc.concat('0') : acc.concat('1')
        , '')

    console.log('a: ', parseInt(epsilon, 2)*parseInt(gamma, 2))

})



// Part 2
// 7863147

getInput(3).then(list => {
    


    const most = getRating() 

    


    }
)

const getRating = (most: boolean, list: string[]) => {
    
}

const getMostSignificantDigit =  (list: string[], position: number) => {
    const obj = list.reduce( (acc,  val) =>
         val.split('')[position] == '1' ? 
    , {zero:0, one: 0})


    }