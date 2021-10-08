const mongoose = require('mongoose');
const User = require('../model/user');





const index = {
    renderIndex(req, res, next) {
        res.render('index')
    },
    getUsers(req, res, next){

        User.find({}).then((users) => {
            res.send(users)
        })
    
    
        
        
}
}

module.exports = index;