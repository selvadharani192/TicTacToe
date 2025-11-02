player = 'X';

let rows = 3;
let cols = 3;
let arr = Array.from({ length: rows }, () => Array(cols).fill(''));
let filledCellCount = 0;
let gameOngoing=false;
function createBox() {

}

function startGame() {
    clearTable();
     document.getElementById("message").textContent='';
    console.log("Game Started");
    showPlayerTurn();
    gameOngoing=true;
}

function makeEntryInArray(cell) {
    let parts = cell.id.split("_");

    let num1 = parseInt(parts[1]);
    let num2 = parseInt(parts[2]);
    arr[num1-1][num2-1] = player;
}


function play(cell) {
    if(gameOngoing){
    if (cell.textContent == '') {
        filledCellCount++;
        cell.textContent = player;
        makeEntryInArray(cell);
        if (filledCellCount >= 5) {
           let flag =checkMatchEnding();
            if (flag!='') {
               endGame()
                return;
            }
             if(filledCellCount==9&&flag==''){
                   endGame(flag);
                     return;
             }
        }
        togglePlayer();
        showPlayerTurn();
    }
    }
}
function endGame(winner){
    setTimeout(() => {
              document.getElementById("turn").textContent='';
  if(winner==' '){
   document.getElementById("message").textContent="Match Draw 🙂";
  }
  else{
    document.getElementById("message").textContent="Player "+player + " is the winner 🏅";
  }
        }, 50);
    gameOngoing=false;                    
}



function checkMatchEnding() {
    let isMatching = '';
   if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
    return arr[0][0];
}

if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
    return arr[0][2];
}

 for( i=0;i<3;i++){
   if(arr[0][i]===arr[1][i]&&arr[0][i]===arr[2][i]){
      return arr[0][i];
   }
 }

 for(i=0;i<3;i++){
 if(arr[i][0]===arr[i][1]&&arr[i][0]===arr[i][2]){
      return arr[i][0];
   }
 }
    return '';
}

function togglePlayer() {
    if (player == 'X')
        player = 'O';
    else
        player = 'X';
}

function showPlayerTurn() {
    document.getElementById("turn").innerText = "Player " + player + " , It's your turn to play 🎮";
    console.log(document.getElementById("turn").innerText);
}



function generateTable() {
    var TicTacToeBox = document.createElement("TABLE");

    TicTacToeBox.setAttribute("id", "ticTacToeBox");
    document.body.appendChild(TicTacToeBox);

    cellCount = 1;
    for (i = 1; i <= 3; i++) {
        var row = document.createElement("TR");
        row.setAttribute("id", "row" + i);
        console.log(document.getElementById("ticTacToeBox"))
        document.getElementById("ticTacToeBox").appendChild(row);

        for (j = 1; j <= 3; j++) {
            var cell = document.createElement("TD");
            cell.setAttribute("id", "cell_" + i + "_" + j);
            cell.addEventListener("click", function () {
                play(this);
            });

            document.getElementById("row" + i).appendChild(cell);
        }
    }

    document.getElementById("TicTacToeBox");
}

function clearTable() {
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= 3; j++) {
            arr[i-1][j-1]='';
            document.getElementById("cell_" + i + "_" + j).textContent = '';
        }

    }
    filledCellCount = 0;
    player='X'
 

}
