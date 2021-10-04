var express = require('express');
var router = express.Router();

let users = [{
  name: "Jeremy",
  age: 36,
  isAdmin : true
  },{
    name:"jeff",
    age: 39,
    isAdmin: false
  },{
    name:"lois",
    age:24,
    isAdmin : false
  },{
    name:"narek",
    age: 25,
    isAdmin : false
  }]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});
router.get('/mypage/', function(req, res, next) {
  res.render('page1', { title: 'Présentation' , nom: "Quievreux", prenom: "Jeremy", email: "monmail@gmail.com"});
});

/* router.get('/:prenom', function(req, res, next) {
  let prenom = req.params.prenom;
  res.render('autre', { pseudo: prenom});
}); */



module.exports = router;
