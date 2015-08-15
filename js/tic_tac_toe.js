console.log('JS file is linked');

var turn = 'x';

function changeTurn() {
  turn = turn === 'x' ? "o" : "x";
}

//grab all cells 
var cells = document.getElementsByClassName('cell');


// for all cells add event listeners that will insert 'x' or 'o' when clicked, then change the turn so that it alternate.
//NB: tried to separate out the function that gets called a(eg. takeTurn(){..}) but'this' needed to be called within here
[].forEach.call(cells, function(v,i,a) {
v.addEventListener('click', function() {
  console.log('clicked');
  this.innerHTML="<p>"+turn+"</p>";
  changeTurn();
  
  });
});



