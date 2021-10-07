/* 
  /router 
*/
var express = require('express');
const Users = require('../controllers/users'); // <- LE CONTROLEUR
var router = express.Router(); 

/**
 * Page d'accueil simple avec un titre, le nombre d'utilisateurs et la date
 * GET /users
 */

router.get('/', Users.printUserLength, Users.printUserAdminlength, (req, res, next) => Users.renderUserspage(req,res,next))

/**
 * Afficher une page avec seulement le nombre d'admins
 * GET /users/admin
 */
router.get('/admin', Users.renderAdminUsersPage)


router.get('/new', (req,res) => {
  res.render('form', {answered:false})
})
/**
 * Afficher un formulaire de contact pour devenir membre
 * GET /users/new
 */

/**
 * Formulaire de contact pour devenir membre
 * POST /users/new
 */

router.post('/new',(req,res) => {
  let newId = Math.floor(Math.random() * 2_000_000)
  const firstname = req.body.first_name
  const lastname = req.body.last_name
  const email = req.body.email
  console.log(`user #${newId} created ${firstname}, ${lastname}, ${email}`)
  res.render('form', {answered:true, id:newId})
})

/**
 * Récupérer en données la liste des utilisateurs
 * GET /users/list
 */

/**
 * Récupérer en données le nombre d'utilisateurs
 * GET /users/count
 */

/**
 * Récupérer en données le nombre d'admins
 * GET /users/count?isAdmin=true
 */

/**
 * Récupérer en données le nombre d'utilisateurs non-admins
 * GET /users/count?isAdmin=false
 */









module.exports = router;
