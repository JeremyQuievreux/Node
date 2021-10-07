const { appendFile } = require('fs');


exports.createFile = (req, res, next) => {
    console.log(req.body);
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();
    let min = date.getMinutes();
    let h = date.getHours();
    let sec = date.getSeconds();
    let filename = "" + d + "" + m + "" + y + "-" + h + "" + min + "" + sec + ".txt";
    let content = `nom : ${req.body.firstname} | Prenom : ${req.body.lastname} | Mail : ${req.body.email} | Message : ${req.body.message}`;

    appendFile("./contact/" + filename +"", content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      next();
};

exports.redirect = (req, res, next) => {
  res.redirect('/');
};