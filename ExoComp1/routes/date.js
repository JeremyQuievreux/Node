var express = require('express');
var router = express.Router();

const recipelist = require('../recipesList.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    let date = new Date();

    let recipeOfTheDay = recipelist.find(recipe => recipe.release_date == date.toLocaleDateString());

    res.json(recipeOfTheDay);
});

module.exports = router;
