const express = require('express');
const router = express.Router();


router.get("/route1", (req, res, next) => {
    res.send("Réponse de la route 1");
});
router.get("/route2", (req, res, next) => {
    res.send("Réponse de la route 2");
});
router.get("/route3", (req, res, next) => {
    res.send("Réponse de la route 3");
});
router.get("/:dynamique", (req, res, next) => {
    let dyna = req.params.dynamique;
    res.send(`Réponse de la pas test/${dyna}`);
});

module.exports = router;