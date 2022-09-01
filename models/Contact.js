const mongoose = require('mongoose')

// schema or fields
const ContactSchema = new mongoose.Schema({
     name:{
          type:String,
          Required:true,
     },
     email:{
          type:String,
          Required:true,
     },
     phone:{
          type:String,
          Required:true
     },
     message:{
          type:String,
          Required:true
     }
},{timestamps:true})
// create model

const ContactModel = mongoose.model('contact',ContactSchema); //blog is name of collection

module.exports = ContactModel