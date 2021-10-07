var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Bienvenue exo comp film");
});

module.exports = router;
