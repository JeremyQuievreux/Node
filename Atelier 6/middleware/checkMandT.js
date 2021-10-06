//Une requête dont le verbe est différent de GET et le body ne contient pas 
//la valeur {"teapot": "happy unbirthday to you"} 
//doit être rejetée avec en réponse un code 418

function checkMandT(req, res, next) {
    let method = req.method;
    let body = req.body;

    if (method !== "GET") {
        res.status(418).send("pas GET");
        return;
    }
    if (!body.teapot) {
       res.status(418).send('get mais pas teapot');
       return;
    }
    if (body.teapot != "happy unbirthday to you") {
        res.status(418).send('get, teapot, mais pas bonne valeur')
        return;
    }
    res.send("GET et teapot bonne valeur")

    /* if (body.teapot == "happy unbirthday to you" && method != "GET") {
        res.send("pas teapot");
    } else {
        res.send("teapot")   ;
    } */
}

module.exports = checkMandT;