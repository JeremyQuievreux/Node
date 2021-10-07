function middlewareC(req, res, next) {
    console.log("C");
    let letters = req.letters;
    letters.push("c");
    next();
}

module.exports = middlewareC;