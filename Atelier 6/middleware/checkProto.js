//Une requête dont la connexion n’est pas HTTPS doit être rejetée en réponse un code 403

function checkProto(req, res, next) {
    let proto = req.protocol;
    if (proto !== "https") {
        res.status(403).send("Le Protocole n'est pas https")
        return;
    }
    next();
}

module.exports = checkProto;