console.log('JS file is linked');

var turn = 'x';

var cells = document.getElementsByClassName('cell');

[].forEach.call(cells, function(v,i,a) {
v.addEventListener('click', function() {console.log('clicked');
  this.innerHTML="<p>"+turn+"</p>";
   
    if (turn==='x') {
      turn ='o';
    } else {
      turn='x';
    };

  });
});

function takeTurn() {
  
 
}


