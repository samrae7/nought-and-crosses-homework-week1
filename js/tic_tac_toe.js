console.log('JS file is linked');

//declare variable turn that changes each turn from x to o and back again
var turn = "X";

//gameWon = true if winning line is on board
var gameWon;

var winner;

function changeTurn() {
  turn = turn === "X" ? "O" : "X";
}

//array of arrays that represents grid at any particular time throughout the game. Each array in the array is a row, starting from top to bottom
var grid = [['','',''],['','',''],['','','']];

//function to check for all winning combinations, change state of gameWon when one is matched and return winner


//for element x, inserts x or o and calls updateGrid() to update the grid representation

//TRIED TO SHORTEN CODE BUT DIDIN"T WORK
// var winLines = [col1,col2,col3,row1,row2,row3,diag1,diag2];

// function lineOfThree(element,index,array) {
//   element.every(function(n) {
//     return(n===element[0] && element[0]!=='');
//   });
// };

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


//true/false variable for whether game is won or not
//NB- could use .every to check all these conditions if we had an array of the above variables.

// NB - tried to replace the below with a nested .every method but it didn'work
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
//NB - shorter way to do this would be to check for row first (have a class for both), then col and assign grid accordingly.
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
// var cells = document.getElementsByClassName('cell');

// for all cells add event listeners to insert 'x' or 'o' when clicked, call updateGrid() to record the move,  then call changeTurn() so that it alternates.
//NB: tried to separate out a function that inserts 'x' or 'o' (eg. takeTurn(){..}) but 'this' needed to be called within here
// [].forEach.call(cells, function(v,i,a) {
//   v.addEventListener

function logMove(y) {
    y.innerHTML="<p>"+turn+"</p>";
    updateGrid(y);
    console.log('move logged');
    y.removeEventListener('click', listener);
  }


// var a1Box = document.getElementById('a1');
// a1Box.addEventListener('click', listener);

// var a2Box = document.getElementById('a2');
// a2Box.addEventListener('click', listener);

// var a3Box = document.getElementById('a3');
// a3Box.addEventListener('click', listener);

// var b1Box = document.getElementById('b1');
// b1Box.addEventListener('click', listener);

// var b2Box = document.getElementById('b2');
// b2Box.addEventListener('click', listener);

// var b3Box = document.getElementById('b3');
// b3Box.addEventListener('click', listener);

// var c1Box = document.getElementById('c1');
// c1Box.addEventListener('click', listener);

// var c2Box = document.getElementById('c2');
// c2Box.addEventListener('click', listener);

// var c3Box = document.getElementById('c3');
// c3Box.addEventListener('click', listener);

var idArray = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];
idArray.forEach(addClickEvent);


function listener() {
  console.log('clicked');
    logMove(this);
    // checkWin();
    console.log(gameWon);
    if (checkWin()===true) {
      winner=turn;
      console.log(winner+' wins!');
      idArray.forEach(freezeCell);
      // a1Box.removeEventListener('click', listener);
      // a2Box.removeEventListener('click', listener);
      // a3Box.removeEventListener('click', listener);
      // b1Box.removeEventListener('click', listener);
      // b2Box.removeEventListener('click', listener);
      // b3Box.removeEventListener('click', listener);
      // c1Box.removeEventListener('click', listener);
      // c2Box.removeEventListener('click', listener);
      // c3Box.removeEventListener('click', listener);
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





