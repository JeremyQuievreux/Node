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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { data: users});
});

module.exports = router;
