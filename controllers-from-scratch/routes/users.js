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

/**
 * Afficher un formulaire de contact pour devenir membre
 * GET /users/new
 */

router.get('/new', Users.renderForm)

/**
 * Formulaire de contact pour devenir membre
 * POST /users/new
 */

router.post('/new',Users.createUser, Users.reRenderForm)

/**
 * Récupérer en données la liste des utilisateurs
 * GET /users/list
 */
router.get('/list', Users.getAllUsers)
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
router.get('/count', Users.getUsersFiltered)





module.exports = router;
