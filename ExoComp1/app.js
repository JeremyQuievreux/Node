var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const dateRouter = require('./routes/date');
const listRouter = require('./routes/list');
const randomRouter = require('./routes/random');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/date', dateRouter);
app.use('/list', listRouter);
app.use('/random', randomRouter);

module.exports = app;
