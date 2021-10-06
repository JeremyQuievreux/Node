var express = require('express');
var router = express.Router();

const recipesList = require("../recipesList.json");

/* GET home page. */
router.get('/', function(req, res, next) {
    let mappedRecipe = recipesList.map((recipe) => {
        return(
            {
                Nom_de_la_recette: recipe.recipe
            }
        )
    })

  res.json(mappedRecipe);
});

module.exports = router;
