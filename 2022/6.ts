import { getInput } from "./utils/fileReader";
import { hasDuplicates } from "./utils/helperFuncs";

getInput(6).then(i => {
    console.log(task(i[0], 4))
    console.log(task(i[0], 14))
})

const task = (input:string, chars: number) => {
    var list: string[] = []
    for (let i = 0; i < input.length; i++) {
        const letter = input[i]   
        list.push(letter)
        if (list.length > chars) {
            list.shift()
            if (!hasDuplicates(list)) {
                return i+1
            }
        }
      }
}


