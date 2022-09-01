const AboutModel = require('../models/About')
const BlogModel = require('../models/Blog')
const CategoryModel = require('../models/Category')
const StudentModel = require('../models/Student')
const RecentModel = require('../models/Recent')

class BlockController{
    static home = async(req,res) =>{
        try{
            const result = await BlogModel.find()
            //console.log(result)
            res.render('home',{data:result})
        }catch(err){
            console.log(err)
        }
    }
    static detail = async(req,res) =>{
        try{
            //console.log(req.params.id)
            const result = await BlogModel.findById(req.params.id)
            const cat = await CategoryModel.find()
            const rec = await RecentModel.find()
            //console.log(result)
            res.render('detail',{data:result,catname:cat,name:rec})
        }
        catch(err){
            console.log(err)
        }
    }

    static curd = async(req,res) =>{
        try{
            const result = await StudentModel.find()
            //console.log(result)
            res.render('curd',{data:result})
        }catch(err){
            console.log(err)
        }
    }

    static blog = async(req,res) =>{
        try{
            const result = await BlogModel.find()
            //console.log(result)
            res.render('blog',{data:result})
        }catch(err){
            console.log(err)
        }
    }
    static about = async(req,res) =>{
        try{
            const result = await AboutModel.find()
            //console.log(result)
            res.render('about',{data:result})
        }
        catch(err){
            console.log(err)
        }
        
    }
    static contact = async(req,res) =>{
        res.render('contact')
    }
   
    static login = async(req,res) =>{
        res.render('login',{message: req.flash('SUCCESS')})
    }
}

module.exports = BlockController