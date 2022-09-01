const mongoose = require('mongoose');

con = "mongodb+srv://Nishant:123@cluster0.deieswh.mongodb.net/webblog?retryWrites=true&w=majority"
const connectdb =()=>{
    //return mongoose.connect('mongodb://localhost:27017/blog_website')  
   return mongoose.connect(con)   
    .then(()=>{
        console.log("Connection Sucessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectdb