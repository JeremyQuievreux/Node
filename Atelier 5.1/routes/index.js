const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
    res.send("Bienvenue sur l'API Web E-commerce");
});


module.exports = router;