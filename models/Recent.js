const mongoose = require('mongoose')

const RecentSchema = new mongoose.Schema({    // SCHEMA OR FIELD 
    name:{
        type:String,
        Required:true,
    },
    image:{
        type:String,
        Required:true,
   }
    
},{timestamps:true})

//  CREATE MODEL
const RecentModel = mongoose.model('recent',RecentSchema);    // BLOG IS NAME OF COLLECTION
module.exports = RecentModel