const { argv } = require('process');

function calcul(a, b , c) {
    console.log(Number(a) + Number(b) + Number(c)); 
}

calcul(argv[2],argv[3],argv[4]);