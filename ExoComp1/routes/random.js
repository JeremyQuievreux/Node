var express = require('express');
var router = express.Router();

const recipesList = require('../recipesList.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    let random = Math.floor(Math.random() * 300);
    console.log(random);

    let randomRecipe = recipesList.find(recipe => recipe.id == random);


  res.send(randomRecipe);
});

module.exports = router;
