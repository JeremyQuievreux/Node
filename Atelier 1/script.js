// import de la fonction argv de process
const { argv } = require('process');

//ma fonction de calcul
function addition(a , b) {
    console.log(a + b);
}

//mise sous variable de argument reçu
// un array commence toujours a 0
let first = Number(argv[2]);
let second = Number(argv[3]);

//addition des 2 variables
addition( first , second );
