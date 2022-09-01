const ContactModel = require('../../models/Contact')

class contactcontroller{
    static contactinsert = async(req,res) =>{
        //console.log('INSERTED DATA') 
        //console.log(req.body) 
        // console.log(req.body.name) 
        try{
            const{name,email,phone,message} = req.body
            const result = new ContactModel({
                name:name,
                email:email,
                phone:phone,
                message:message  
            })
            // Saving data
            await result.save()
            res.redirect('/contact')  // route url
        }catch(err){
            console.log(err)
        }
    }
    static contactdisplay = async(req,res) =>{ 
        try{
            const result = await ContactModel.find()
            console.log(result)
            res.render('admin/contact/displaycontact',{data:result})    // data ko display page   
        }catch(err){
            console.log(err)
        }
    }




}
module.exports = contactcontroller