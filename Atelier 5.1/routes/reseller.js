const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
    res.send("Bienvenue reseller");
});

router.post("/add-product", (req, res, next) => {
    let newProduct = req.body;
    console.log(`Ajout d'un nouvel article :
    *********
    Désignation : ${newProduct.newproduct} | Prix : ${newProduct.newprice}
    *********
    Ajouter par : ${newProduct.vendor}
    `);
    res.send("article ajouté")
});

router.delete("/delete-product", (req, res, next) => {
    let oldProduct = req.body;
    console.log(`Suppression d'un article :
    *********
    Désignation : ${oldProduct.delete_product} | Prix : ${oldProduct.delete_price}
    *********
    Supprimer par : ${oldProduct.deletevendor}
    `);
    res.send("article supprimé")
});


module.exports = router;