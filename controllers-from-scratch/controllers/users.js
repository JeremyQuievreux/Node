const users = require('../users.json')
let usersNumber = users.length

function adminFilterFunction(person){
    return person.isAdmin
}
function notAdminFilterFunction(person){
    return !person.isAdmin
}

const onlyAdmins = users.filter(adminFilterFunction)
const notAdmin = users.filter(notAdminFilterFunction)

const Users = {

    printUserAdminlength(req,res,next){
        console.log(onlyAdmins.length)
        next()
    },

    printUserLength(req,res,next){
        console.log(usersNumber)
        next()
    },

    renderUserspage(req,res,next){
        res.render('users', {
                title:"Users", 
                usersNumber: usersNumber,
                dateString : new Date().toLocaleDateString('fr')
        })
    },
    renderAdminUsersPage(req,res){
        res.render('users', {
          title:"Admin users",
          usersNumber:onlyAdmins.length,// todo
          dateString:new Date().toLocaleDateString('fr') 
        })
    },
    createUser(req, res, next){
        let newId = Math.floor(Math.random() * 2_000_000)
        const firstname = req.body.first_name
        const lastname = req.body.last_name
        const email = req.body.email
        req.newId = newId;
        console.log(`user #${newId} created ${firstname}, ${lastname}, ${email}`)
        next();
    },
    reRenderForm(req, res, next){   
        res.render('form', {answered:true, id: req.newId})
    },
    renderForm(req, res, next){
        res.render('form', {answered:false})
    },
    getAllUsers(req, res, next) {
        res.json(users)
    },
    usersCount(req, res, next){
        res.send("il y a " + usersNumber + " utilisateurs")
    },
    getUsersFiltered(req, res, next){
        if (req.query.isAdmin === "true") {
            res.json(onlyAdmins)
        } else if (req.query.isAdmin === "false") {
            res.json(notAdmin)
        }else {
            res.json(users)
        }
    }
}


module.exports = Users