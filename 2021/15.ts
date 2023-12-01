import { getInput } from "./utils/fileReader";

getInput(15).then(list => task(list.map((row) => row.split("").map((i) => parseInt(i, 10)))))

    const task= (grid:number[][]) => {
    

        const width = grid[0].length*5;
        const height = grid.length*5;
        
        const fullGrid = Array.from({ length: height }, (_, y) =>
          Array.from({ length: width }, (_, x) => {
            return (
              ((grid[y % grid.length][x % grid[0].length] +
                Math.floor(y / grid.length) +
                Math.floor(x / grid[0].length) -
                1) %
                9) +
              1
            );
          })
        );
        
        const getNeighbors = (x: number, y: number) => {
          return [
            [x + 1, y],
            [x - 1, y],
            [x, y + 1],
            [x, y - 1],
          ];
        };
        
        const scoreBoard: number[][] = fullGrid.map((r) => r.map((_) => Infinity));
        
        scoreBoard[0][0] = 0;
        fullGrid[0][0] = 0;
        
        // Iterate until no improvement occurs
        let prevBoard: number[][] = [];
        while (JSON.stringify(scoreBoard) !== JSON.stringify(prevBoard)) {
          prevBoard = scoreBoard.map((r) => [...r]);
          for (let x = 0; x < fullGrid[0].length; x++) {
            for (let y = 0; y < fullGrid.length; y++) {
              if (x === 0 && y === 0) continue;
              scoreBoard[y][x] =
                Math.min(
                  ...getNeighbors(x, y).map(
                    (coords) => scoreBoard[coords[1]]?.[coords[0]] ?? Infinity
                  )
                ) + fullGrid[y][x];
            }
          }
        }
        
        console.log(scoreBoard[height - 1][width - 1]);
}