var express = require('express');
var router = express.Router();
const { appendFile } = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();
    let min = date.getMinutes();
    let h = date.getHours();
    let filename = "" + d + "" + m + "" + y + "-" + h + "" + min + ".txt"
    let content = `nom : ${req.body.firstname} | Prenom : ${req.body.lastname} | Mail : ${req.body.mail} | Message : ${req.body.message}`;


    appendFile("./contact/" + filename +"", content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });


  res.render('index', { title: 'Express' });
});

module.exports = router;
