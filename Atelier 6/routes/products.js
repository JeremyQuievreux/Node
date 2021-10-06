const express = require('express');
const router = express.Router();

const productsList = require('../data.json');

router.get("/list", (req, res, next) => {
    let mapped = productsList.map((prod) => {
        return (
            {designation: prod.designation,
             price: prod.price
        })
    })
    res.json(mapped);
});

router.post("/shop", (req, res, next) => {
    let commande = req.body;
    console.log(`Nouvelle commande :
    ***********
    Nom client : ${commande.firstname}
    Prénom du client : ${commande.lastname}
    **********
    Article : ${commande.product} | Prix : ${commande.price} | Quantité : ${commande.quantity}
    **********  
    Prix total : ${commande.price * commande.quantity}
    `);
    res.send('Commande bien reçu');
})

router.get("/filtered/:price", (req, res, next) => {
    let price = req.params.price;
    if (isNaN(price) || price > 10) {
        
        res.status(400).send("La valeur de votre filtre n'est pas un chiffre entre 1 et 10");
    } else {
        let filteredProduct = productsList.filter((prod) => prod.price <= price);
        res.json(filteredProduct);
    }
    
});


module.exports = router;