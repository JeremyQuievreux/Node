//Une requête dont le verbe est différent de GET et le body ne contient pas 
//la valeur {"teapot": "happy unbirthday to you"} 
//doit être rejetée avec en réponse un code 418

function checkMandT(req, res, next) {
    let method = req.method;
    let body = req.body;
    //si method n'est pas GET
    if (method !== "GET") {
        res.status(418).send("pas GET");
        //le return c'est pour pas prendre le dernier res.send en bas!!!
        return;
    }
    // Si body.teapot n'existe pas
    if (!body.teapot) {
       res.status(418).send('get mais pas teapot');
        //le return c'est pour pas prendre le dernier res.send en bas!!!
       return;
    }
    //si teapot exite mais n'egale pas happu unbirthday to you
    if (body.teapot != "happy unbirthday to you") {
        res.status(418).send('get, teapot, mais pas bonne valeur')
        //le return c'est pour pas prendre le dernier res.send en bas!!!
        return;
    }
    res.send("GET et teapot bonne valeur")
}

module.exports = checkMandT;