const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
   firstname:String,
   lastname:String,
   email:String
}) 

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel
