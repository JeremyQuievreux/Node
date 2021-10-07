function middlewareB(req, res, next) {
    console.log("B");
    let letters = req.letters;
    letters.push("b");
    next();
}

module.exports = middlewareB;