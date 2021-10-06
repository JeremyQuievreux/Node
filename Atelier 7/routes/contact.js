var express = require('express');
var router = express.Router();

const contactCtrl = require('../controllers/contact');

/* GET home page. */
router.post('/', contactCtrl.createFile);

module.exports = router;
