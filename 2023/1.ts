import { getInput } from "./utils/inputLoader";

getInput(1).then((input) => {
  console.log("Part 1: ",taskA(input))
  console.log("Part 2: ",taskB(input))
});

function taskA(input: string[])  {
  return input.reduce((sum, line) => {
    const value = line.replace(/\D/g, "");
    if (value == "") return sum;
    if (value.length == 1) {
      return sum + parseInt(value.concat(value));
    }
    return sum + parseInt(value[0] + value.slice(-1));
  }, 0);
}

function taskB(input: string[]) {


}