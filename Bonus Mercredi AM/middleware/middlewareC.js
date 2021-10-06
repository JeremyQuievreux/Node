function middlewareC(req, res, next) {
    console.log("C");
    let letters = req.body.letters;
    letters.push("c");
    next();
}

module.exports = middlewareC;