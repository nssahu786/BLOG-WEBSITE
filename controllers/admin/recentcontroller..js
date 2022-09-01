const RecentModel = require('../../models/Recent')

class recentcontroller{
    static createrecent = async(req,res) =>{
        res.render('admin/recent/createrecent')
    }
    static recentinsert = async(req,res) =>{
        //console.log('INSERTED DATA') 
        //console.log(req.body) 
        // console.log(req.body.name) 
        try{
            const{name} = req.body
            const result = new RecentModel({
                name:name // name schema,form
                
            })
            // Saving data
            await result.save()
            res.redirect('createrecent')  // route url
        }catch(err){
            console.log(err)
        }
    }

    static recentdisplay = async(req,res) =>{ 
        try{
            const result = await RecentModel.find()
            console.log(result)
            res.render('admin/recent/displayrecent',{data:result})    // data ko display page   
        }catch(err){
            console.log(err)
        }
    }

}
module.exports = recentcontroller