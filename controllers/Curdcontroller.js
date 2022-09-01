const StudentModel = require('../models/Student.js')

class Curdcontroller{
    static createform = async(req,res) =>{
        res.render('curd/create')
    }
    static insertdata = async(req,res) =>{
        //console.log('INSERTED DATA') 
        //console.log(req.body) 
        console.log(req.body.name) 
        try{
            const{name,email} = req.body
            const result = new StudentModel({
                name:name,  // name schema,form
                email:email
            })
            // Saving data
            await result.save()
            res.redirect('/curd/create')  // route url
        }catch(err){
            console.log(err)
        }
    }
    static displaydata = async(req,res) =>{
        try{
            const result = await StudentModel.find()
            // console.log(result)
            res.render('curd/display',{data:result})    // data ko display page   
        }catch(err){
            console.log(err)
        }
    }
    static viewdata = async(req,res) =>{
        console.log(req.params.id)
        try{
            const result = await StudentModel.findById(req.params.id)
            //console.log(result)
            res.render('curd/view',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static editdata = async(req,res) =>{
        //console.log(req.params.id)
        try{
            const result = await StudentModel.findById(req.params.id)
            console.log(result)
            res.render('curd/edit',{data:result})
        }catch(err) 
        {
            console.log(err)
        }

    }
    static updatedata = async(req,res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await StudentModel.findByIdAndUpdate(req.params.id)
            //console.log(result)
            res.redirect('/curd/display');
        }
        catch(err){
            console.log(err)
        }
    }
    static deletedata = async(req,res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            //console.log(result)
            res.redirect('/curd/display');
        }
        catch(err){
            console.log(err)
        }
    }
} 
module.exports = Curdcontroller;