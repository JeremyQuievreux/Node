// import de la fonction argv de process
const { argv } = require('process');
const { appendFile } = require('fs');

//Mise sous variables de argv
let type = argv[2];
let one = Number(argv[3]);
let two = Number(argv[4]);

// fonction de création de fichier + insertion du text
function editCalcul(content) {
    appendFile("results.txt", content , function (err) {
     err ? console.log(err) : console.log("fichier crée et/ou modifié");
     }) 
 }

function checkNumber(nombre) {
    isNaN(one) ? console.log("Votre argument 2 n'est pas un chiffre !"); process.exit(1) 
}