const mongoose = require('mongoose');
const User = require('../model/user');





const form = {
    createUser(req, res, next){
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        console.log(firstname + " " + lastname + " " + email);
        User.create({
            firstname: firstname,
            lastname: lastname,
            email: email
        }).then(()=> {
            console.log("Utilisateur ajouté");
        })
        res.redirect('/');
    }
}

module.exports = form;