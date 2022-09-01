const AboutModel = require('../../models/About')

class aboutcontroller{
    static aboutcreate = async(req,res) =>{
        res.render('admin/about/createabout')
    }

    static aboutinsert = async(req,res) =>{
        //console.log('INSERTED DATA') 
        //console.log(req.body) 
        // console.log(req.body.name) 
        try{
            const{name,title,description,para} = req.body
            const result = new AboutModel({
                name:name,
                title:title,
                description:description,
                para:para  
            })
            // Saving data
            await result.save()
            res.redirect('/admin/createabout')  // route url
        }catch(err){
            console.log(err)
        }
    }

}
module.exports = aboutcontroller