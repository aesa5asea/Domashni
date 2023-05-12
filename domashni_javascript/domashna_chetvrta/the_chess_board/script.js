let x = 8;
let board = "";

for ( i = 0 ; i < x  ; i++) {
    for ( j = 0 ; j < x ; j++) {
        if((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
            board += " ■";
        }
        else {
            board += " □";
        }
    }
    board += "\n"
}
console.log(board);