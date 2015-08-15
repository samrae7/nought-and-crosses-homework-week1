console.log('JS file is linked');

//declare variable turn that changes each turn from x to o and back again
var turn = 'x';

function changeTurn() {
  turn = turn === 'x' ? "o" : "x";
}

//array of arrays that represents grid at any particular time throughout the game. Each array in the array is a row, starting from top to bottom
var currentGrid = [['','',''],['','',''],['','','']];


//winning combinations


var gameWon;

//gets id of clicked cell and updates currentGrid array accordingly.
//NB - shorter way to do this would be to check for row first, then column and assign currentGrid accordingly.
function updateGrid(cell) {

  switch(cell.id) {
  case 'a1':
    currentGrid[0][0]=turn;
    break;
  case 'a2':
    currentGrid[0][1]=turn;
    break;
  case 'a3':
    currentGrid[0][2]=turn;
    break;
  case 'b1':
    currentGrid[1][0]=turn;
    break;
  case 'b2':
    currentGrid[1][1]=turn;
    break;
  case 'b3':
    currentGrid[1][2]=turn;
    break;
  case 'c1':
    currentGrid[2][0]=turn;
    break;
  case 'c2':
    currentGrid[2][1]=turn;
    break;
  case 'c3':
    currentGrid[2][2]=turn;
    break;
  };
  console.log(currentGrid);
};

//grab all cells 
var cells = document.getElementsByClassName('cell');

// for all cells add event listeners to insert 'x' or 'o' when clicked, call updateGrid() to record the move,  then call changeTurn() so that it alternates.
//NB: tried to separate out a function that inserts 'x' or 'o' (eg. takeTurn(){..}) but 'this' needed to be called within here
[].forEach.call(cells, function(v,i,a) {
v.addEventListener('click', function() {
  console.log('clicked');
  this.innerHTML="<p>"+turn+"</p>";
  updateGrid(this);
  changeTurn();
  // console.log(currentGrid[0].every(function(n) {
  // return(n === currentGrid[0][0]);
  // }));
  gameWon = currentGrid[0].every(function(n) {
  return(n === currentGrid[0][0] && currentGrid[0][0]!=='');
  });
  console.log(gameWon);
  });
});