function addLetter(req, res, next) {
    let body = req.body;
    body.letters = [];
    next();
}

module.exports = addLetter;