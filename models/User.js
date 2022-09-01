const mongoose = require('mongoose')

// schema or fields
const UserSchema = new mongoose.Schema({
     username:{
          type:String,
          Required:true,
     },
     email:{
          type:String,
          Required:true,
     },
     mobile:{
          type:String,
          Required:true,
          unique:true,
     },
     password:{
        type:String,
        Required:true,
        unique:true,
    },

},{timestamps:true})
// create model

const UserModel = mongoose.model('user',UserSchema); //blog is name of collection

module.exports = UserModel