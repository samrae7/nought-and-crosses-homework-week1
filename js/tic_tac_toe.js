//GLOBAL VARIABLES
  var idArray = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];

  //changes each turn from x to o and back again
  var turn = "X";

  //gameWon = true if winning line is on board
  var gameWon;

  var winner;

  //scores for x and o
  var xScore=0;
  var oScore=0;

  //array of arrays that represents grid at any particular time. Each array in the array is a row. The variable is set in resetGame();
  var grid;

//update the scores based on the winnert
function updateScore() {
   if (winner==='X') {
    xScore++;
    document.getElementById('scoreX').innerHTML='<p>'+xScore+'</p>';
   }
   else {
    oScore++;
    document.getElementById('scoreO').innerHTML='<p>'+oScore+'</p>';
   }
}

//alternates the tuen
function changeTurn() {
  turn = turn === "X" ? "O" : "X";
  turnPrompt();
}

//function to check for all winning combinations, change state of gameWon when one is matched and return winner
function checkWin() {
//lines(rows,cols and two diags) to look at to find winner
  var col1 = [grid[0][0],grid[1][0],grid[2][0]];
  var col2 = [grid[0][1],grid[1][1],grid[2][1]];
  var col3 = [grid[0][2],grid[1][2],grid[2][2]];
  var row1 = grid[0];
  var row2 = grid[1];
  var row3 = grid[2];
  var diag1 = [grid[0][0],grid[1][1],grid[2][2]];
  var diag2 = [grid[0][2],grid[1][1],grid[2][0]];

  gameWon =
  (col1.every(function(n) {
    return(n===col1[0] && col1[0]!=='');
    })
  ||
  col2.every(function(n) {
    return(n===col2[0] && col2[0]!=='');
    })
  ||
  col3.every(function(n) {
    return(n===col3[0] && col3[0]!=='');
    })
  ||
  row1.every(function(n) {
    return(n===row1[0] && row1[0]!=='');
    })
  ||
  row2.every(function(n) {
    return(n===row2[0] && row2[0]!=='');
    })
  ||
  row3.every(function(n) {
  return(n===row3[0] && row3[0]!=='');
    })
  ||
  diag1.every(function(n) {
  return(n===diag1[0] && diag1[0]!=='');
    })
  ||
  diag2.every(function(n) {
  return(n===diag2[0] && diag2[0]!=='');
    }))
  ?
  true : false;
  return gameWon;
};

//get id of clicked cell and update array accordingly.
function updateGrid(cell) {

  switch(cell.id) {
  case 'a1':
    grid[0][0]=turn;
    break;
  case 'a2':
    grid[0][1]=turn;
    break;
  case 'a3':
    grid[0][2]=turn;
    break;
  case 'b1':
    grid[1][0]=turn;
    break;
  case 'b2':
    grid[1][1]=turn;
    break;
  case 'b3':
    grid[1][2]=turn;
    break;
  case 'c1':
    grid[2][0]=turn;
    break;
  case 'c2':
    grid[2][1]=turn;
    break;
  case 'c3':
    grid[2][2]=turn;
    break;
  };
  console.log(grid);
};

//for element x, inserts x or o and calls updateGrid() to update the grid representation
function logMove(y) {
    y.innerHTML="<p>"+turn+"</p>";
    updateGrid(y);
    console.log('move logged');
    y.removeEventListener('click', listener);
  }

function listener() {
  logMove(this);
  if (checkWin()===true) {
    winner=turn;
    console.log(winner+' wins!');
    updateScore();
    idArray.forEach(freezeCell);
    var h1Grabbed = document.getElementsByTagName('h1');
    h1Grabbed[0].innerHTML=turn + " wins!";
  };
  changeTurn(); 
  };

function addClickEvent(a,b,c) {
  document.getElementById(a).addEventListener('click', listener);
};

function freezeCell(a,b,c) {
  document.getElementById(a).removeEventListener('click', listener);
};


function resetGame() {
  var cells = document.getElementsByClassName('cell')
  ;
  for (i=0; i<=8; i++) {
  cells[i].innerHTML='';
  };
  var h1Grabbed = document.getElementsByTagName('h1');
      h1Grabbed[0].innerHTML="Noughts and Crosses"
  grid= [['','',''],['','',''],['','','']];
  idArray.forEach(addClickEvent);

};

function turnPrompt() {
  document.getElementById('message').innerHTML=turn+' to play.'
} 

//PROGRAM
//clear moves from screen and reset grid arrayv
resetGame();

//put 0 on score box 
document.getElementById('scoreX').innerHTML='<p>'+xScore+'</p>';
document.getElementById('scoreO').innerHTML='<p>'+oScore+'</p>';

//add  click event to 'clear'
document.getElementById('newGameButton').addEventListener('click', resetGame);





