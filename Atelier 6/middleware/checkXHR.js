//Une requête non XHR (ne contenant pas le header X-Requested-With: XMLHttpRequest) 
//doit être rejetée avec en réponse un code 400

function checkXHR(req, res, next) {
    let xhr = req.xhr;
    //si xhr false
    if (!xhr) {
      res.status(400).send("Votre requete n'est pas de type XHR");
      //sinon
    } else {
       /* next() ; */
      res.send("Votre requete est bien de type XHR");
    }
}

module.exports = checkXHR;