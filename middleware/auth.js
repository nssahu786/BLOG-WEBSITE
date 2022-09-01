const UserModel = require("../models/User");
const jwt = require('jsonwebtoken'); 


const checkuserauth = async(req,res,next) =>{
   //console.log("AUTHENTICATION")
   try{
        const token = req.cookies.jwt;      //browser se cookies get
        if (!token)
        {
            res.redirect('/login')
        }
        if (!token)
        {
            res.redirect('/')
        }
        else{
            //console.log(token)
            const verifyuser = jwt.verify(token,'Nishant')  // nishant is security key
            //console.log(verifyuser)
            const user = await UserModel.findOne({_id: verifyuser.userid})   // login wale user ka data
            //console.log(user)
            req.user = user     // diff pages per name Show karana
            next();
        }
   }catch(err){
    console.log(err)
   }
   
}
module.exports = checkuserauth