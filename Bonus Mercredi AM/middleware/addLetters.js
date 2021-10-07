function addLetter(req, res, next) {
    req.letters = [];
    next();
}

module.exports = addLetter;