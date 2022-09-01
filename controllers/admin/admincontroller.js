class admincontroller{
    static dashboard =(req,res) =>{
        const {username , email , mobile } = req.user
        res.render('admin/dashboard',{n: username, e: email, m: mobile})
    }
}
module.exports = admincontroller