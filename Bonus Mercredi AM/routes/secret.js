var express = require('express');
var router = express.Router();

const middlewareA = require('../middleware/middlewareA');
const middlewareB = require('../middleware/middlewareB');
const middlewareC = require('../middleware/middlewareC');

/* GET home page. */
router.get('/', middlewareA, (req, res, next) => {
    res.send("Vous devez mettre /a, /b, /c, /ab, /ac, /abc");
});
router.get('/a', middlewareA, (req, res, next) => {
    res.send(req.letters);
});
router.get('/b', middlewareB, (req, res, next) => {
    res.send(req.letters);
});
router.get('/c', middlewareC, (req, res, next) => {
    res.send(req.letters);
});
router.get('/ab', middlewareA, middlewareB, (req, res, next) => {
    res.send(req.letters);
});
router.get('/ac', middlewareA, middlewareC,  (req, res, next) => {
    res.send(req.letters);
});
router.get('/abc', middlewareA, middlewareB, middlewareC, (req, res, next) => {
    res.send(req.letters);
});

module.exports = router;
