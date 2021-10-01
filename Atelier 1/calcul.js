// import de la fonction argv de process
const { argv } = require('process');

let calcul = argv[2];
let one = Number(argv[3]);
let two = Number(argv[4]);

function doCalcul(calcul , one, two) {
   switch (calcul) {
    case "addition":
        console.log(one + two);
        break;
    case "soustraction":
        console.log(one - two);
        break;
    case "division":
        console.log(one / two);
        break;
    case "multiplication":
        console.log(one * two);
    break;
    default:
        console.log("Rentrez : addition / soustraction / division / multiplication puis 2 chiffres");
        break;
    } 
}

doCalcul(calcul, one, two);

