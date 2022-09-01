const mongoose = require('mongoose')

// schema or fields
const AboutSchema = new mongoose.Schema({
     name:{
          type:String,
          Required:true,
     },
     title:{
          type:String,
          Required:true,
     },
     description:{
          type:String,
          Required:true
     },
     para:{
          type:String,
          Required:true
     }
},{timestamps:true})
// create model

const AboutModel = mongoose.model('about',AboutSchema); 

module.exports = AboutModel