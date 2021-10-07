const users = require('../users.json')
let usersNumber = users.length

function adminFilterFunction(person){
    return person.isAdmin
  }

const onlyAdmins = users.filter(adminFilterFunction)

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
    }
}


module.exports = Users