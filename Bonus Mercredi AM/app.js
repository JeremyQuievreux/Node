var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const secretRouter = require('./routes/secret');
const addLetters = require('./middleware/addLetters');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(addLetters);

app.use('/', indexRouter);
app.use('/secret', secretRouter);


module.exports = app;
