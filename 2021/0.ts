import { getInput } from "./utils/fileReader";
import { stringToNumbers } from "./utils/helperfuncs";

getInput(1).then(list => {
    const nums = stringToNumbers(list)
    nums.map(num1 => 
        nums.map(num2=> 
            nums.map(num3 => 
                num1+num2+num3 ==2020 
                && console.log(num1*num2*num3))))
            })
