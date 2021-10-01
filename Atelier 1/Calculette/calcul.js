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
// Fonction qui fais le calcul
function doCalcul(type, one , two) {
    //Verification que les chiffres sois des chiffres
    if (isNaN(one)) {
        //si le 2 argv n'est pas un chiffre
        console.log("Votre argument 2 n'est pas un chiffre !");
        process.exit(1) 

    } else if (isNaN(two)) {
        //si le 3eme argv n'est pas un chiffre
        console.log("Votre argument 3 n'est pas un chiffre !");
        process.exit(1) 

    } else {
        //Si oui vérification du type de calcul
        // si c'est addition
        if (type === "addition") {
            //mise sous variable du resultat
        let result = one + two;
            //mise sous d'une phrase
        let phrase = `${one} + ${two} = ${result}`;
            //log de la phrase
        console.log(phrase);
            //appel de la fonction qui crée et insert le text
        editCalcul(`\r ${phrase}`);

        //si c'est substration
    } else if (type === "substraction"){
        let result = one - two;
        let phrase = `${one} - ${two} = ${result}`;
        console.log(phrase);
        editCalcul(`\r ${phrase}`);

        //si c'est division
    } else if (type === "division"){
        let result = one / two;
        let phrase = `${one} / ${two} = ${result}`;
        console.log(phrase);
        editCalcul(`\r ${phrase}`);

        //si c'est multiplication
    } else if (type === "multiplication") {
        let result = one * two;
        let phrase = `${one} x ${two} = ${result}`;
        console.log(phrase);
        editCalcul(`\r ${phrase}`);

        } else {
            //Sinon message d'erreur
            console.log("Votre premier argument n'est pas un type d'operation");
        }
    }
}

//Appel de la fonction
doCalcul(type, one, two);





