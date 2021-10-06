var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const index = require('./routes/index');
const products = require('./routes/products');
const reseller = require('./routes/reseller');
//import de mes middleware
const checkXHR = require('./middleware/checkXHR');
const checkMandT = require('./middleware/checkMandT');
const checkProto = require('./middleware/checkProto');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(express.static(path.join(__dirname, 'public'))); */


app.use('/', index);
app.use('/products', products);
app.use('/reseller', reseller);


//pour tester que sur des routes spécifiques mes middleware perso
app.use("/xhr", checkXHR);
app.use("/teapot", checkMandT);
app.use("/proto", checkProto);

module.exports = app;
