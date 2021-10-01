//Import des fonctions de node
const { appendFile , readFile , writeFile} = require('fs');
const { argv } = require('process');
//mise sous variable de l'argument
const data = argv[2];

//Creation du fichier "fichier.txt" avec "" comme contenu
appendFile("fichier.txt", "" , function (err) {
    /*Ici le non ternaire (if else classique)
        si ya une erreur log de l'erreur
    if (err) {
        console.log(err);
    } else {
        // sinon log "fichier crée"
        console.log("fichier crée");
    } */
    
    //ternaire
    // si ya une erreur log de l'erreur
    // sinon log "fichier crée"
    err ? console.log(err) : console.log("fichier crée");
})


// Remplacement du contenu du fichier "fichier.txt"
// avec le contenu de "data"
writeFile('fichier.txt', data , function (err) {
    //si erreur afficher l'erreur
    if (err) throw err;
    //sinon log de "fichier mis a jour"
    console.log('Fichier mis à jour !');
 });


//Lecture du fichier "fichier.txt" avec encodage UTF8
readFile('fichier.txt', 'utf8', function(err, data) {
    if (err) {
        //Si erreur log de l'erreur
        console.log(err);
    } else {
        //sinon lecture du contenu
        const content = data;
        console.log(content);
    }
});