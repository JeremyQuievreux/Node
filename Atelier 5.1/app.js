var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const index = require('./routes/index');
const products = require('./routes/products');
const reseller = require('./routes/reseller');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(express.static(path.join(__dirname, 'public'))); */

app.use('/', index);
app.use('/products', products);
app.use('/reseller', reseller);

module.exports = app;
