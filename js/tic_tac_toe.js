console.log('JS file is linked');

//declare variable turn that changes each turn from x to o and back again
var turn = "x";

//gameWon = true if winning line is on board
var gameWon;

var winner;

function changeTurn() {
  turn = turn === "x" ? "o" : "x";
}

//array of arrays that represents grid at any particular time throughout the game. Each array in the array is a row, starting from top to bottom
var grid = [['','',''],['','',''],['','','']];

//function to check for all winning combinations, change state of gameWon when one is matched and return winner


//for element x, inserts x or o and calls updateGrid() to update the grid representation
function logMove(x) {
    console.log('clicked');
    x.innerHTML="<p>"+turn+"</p>";
    updateGrid(x);
  }

function checkWin() {
//lines(rows,columns and two diagonals) to look at to find winner
var column1 = [grid[0][0],grid[1][0],grid[2][0]];
var column2 = [grid[0][1],grid[1][1],grid[2][1]];
var column3 = [grid[0][2],grid[1][2],grid[2][2]];
var row1 = grid[0];
var row2 = grid[1];
var row3 = grid[2];
var diagonal1 = [grid[0][0],grid[1][1],grid[2][2]];
var diagonal2 = [grid[0][2],grid[1][1],grid[2][0]];
//true/false variable for whether game is won or not
  gameWon = (column1.every(function(n) {
    return(n===column1[0] && column1[0]!=='');
    })
  ||
  column2.every(function(n) {
    return(n===column2[0] && column2[0]!=='');
    })
  ||
  column3.every(function(n) {
    return(n===column3[0] && column3[0]!=='');
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
  diagonal1.every(function(n) {
  return(n===diagonal1[0] && diagonal1[0]!=='');
    })
  ||
  diagonal2.every(function(n) {
  return(n===diagonal2[0] && diagonal2[0]!=='');
    }))
  ?
  true : false;
  return gameWon;
};


//function that returns winner not just win


//gets id of clicked cell and update array accordingly.
//NB - shorter way to do this would be to check for row first, then column and assign grid accordingly.
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

//grab all cells 
var cells = document.getElementsByClassName('cell');

// for all cells add event listeners to insert 'x' or 'o' when clicked, call updateGrid() to record the move,  then call changeTurn() so that it alternates.
//NB: tried to separate out a function that inserts 'x' or 'o' (eg. takeTurn(){..}) but 'this' needed to be called within here
[].forEach.call(cells, function(v,i,a) {
  v.addEventListener('click', function listener() {
    logMove(this);
    checkWin();
    console.log(gameWon);
    if (gameWon===true) {
      winner=turn;
      console.log(winner+' wins!');
    };
    changeTurn(); 
  });
});

