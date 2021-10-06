var express = require('express');
var router = express.Router();

const middlewareA = require('../middleware/middlewareA');
const middlewareB = require('../middleware/middlewareB');
const middlewareC = require('../middleware/middlewareC');

/* GET home page. */
router.get('/a', middlewareA, (req, res, next) => {
    res.send(req.body.letters);
});
router.get('/b', middlewareB, (req, res, next) => {
    res.send(req.body.letters);
});
router.get('/c', middlewareC, (req, res, next) => {
    res.send(req.body.letters);
});
router.get('/ab', middlewareA, middlewareB, (req, res, next) => {
    res.send(req.body.letters);
});
router.get('/ac', middlewareA, middlewareC,  (req, res, next) => {
    res.send(req.body.letters);
});
router.get('/abc', middlewareA, middlewareB, middlewareC, (req, res, next) => {
    res.send(req.body.letters);
});

module.exports = router;
