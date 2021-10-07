function middlewareA(req, res, next) {
    console.log("A");
    let letters = req.letters;
    letters.push("a");
    next();
}

module.exports = middlewareA;