type TileType = {
    tileValue: string;
    updatable: boolean;
    valid: boolean;
}

export default function ValidSudoku(board:TileType[][]) {
    let seen = new Set();
    let incorrect = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let number : string = board[i][j].tileValue;
            if (number !== '') {
                if(!seen.has(number + " in row " + i)) {
                    seen.add(number + " in row " + i);
                }
                else {
                    incorrect.add(board[i][j]);
                }

                if(!seen.has(number + " in column " + j)) {
                    seen.add(number + " in column " + j);
                }
                else {
                    incorrect.add(board[i][j]);
                } 

                if(!seen.has(number + " in block " + Math.floor(i/3) + "-" + Math.floor(j/3))) {
                    seen.add(number + " in block " + Math.floor(i/3) + "-" + Math.floor(j/3));
                } 
                else {
                    incorrect.add(board[i][j]);
                }
            }
        }
    }
    console.log(incorrect);
    return true;
}
