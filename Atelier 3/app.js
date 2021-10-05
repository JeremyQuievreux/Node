const express = require('express')
const app = express()
const port = 3000



app.set('view engine', 'ejs');
app.set('views', __dirname);


/* app.use( "/", function (req) {
    console.log(req.method);
}); */

app.use('/', function (req, res, next) {
    console.log('Request Type:', req.method, ' sur ', req.url, req.hostname);
    next();
  });

app.get("/", function (req, res) {
    res.json({message : "mon message de reponse en json"});
})

app.get("/pagejson", function (req, res) {
    res.json({message : "le message en json de la page"});
})
app.get('/page', function(req, res) {
    res.render('index');
});


app.listen(port, () => {
    console.log(`Ecoute de server sur le PORT ${port}`)
  })