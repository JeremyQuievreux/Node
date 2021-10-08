var express = require('express');
var router = express.Router();

const formCtrl = require('../controllers/form');
const indexCtrl = require('../controllers/index');

/* GET home page. */
router.get('/', indexCtrl.getUsers);


router.get('/formulaire', function(req, res, next) {
  res.render('formview');
});

router.post('/adduser', formCtrl.createUser);

module.exports = router;
