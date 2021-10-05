const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
    res.send("Réponse de la route racine");
});


module.exports = router;