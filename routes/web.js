const express = require('express')      // METHOD CREATE 
const BlockController = require('../controllers/BlockController')
const FrontController = require('../controllers/FrontController')
const admincontroller = require('../controllers/admin/admincontroller')
const blogcontroller = require('../controllers/admin/blogcontroller')
const categorycontroller = require('../controllers/admin/categorycontroller')
const Curdcontroller = require('../controllers/Curdcontroller')
const contactcontroller = require('../controllers/admin/contactcontroller')
const aboutcontroller = require('../controllers/admin/aboutcontroller')
const aboutmiddleware = require('../middleware/aboutmiddleware')   // MIDDLEWARE ROUTE CREATION
const recentcontroller = require('../controllers/admin/recentcontroller.')
const imagemiddleware = require('../middleware/imagemiddleware')
const auth = require('../middleware/auth')
const usercontroller = require('../controllers/user/usercontroller')

const router = express.Router()     // ROUTE CREATE

//router.get('/',FrontController.home)   

router.get('/',BlockController.home)    // BLOCK CONTROLLER HOME ROUTE
router.get('/curd',BlockController.curd)
//router.get('/about',aboutmiddleware,BlockController.about)    // BLOCK CONTROLLER ABOUT ROUTE
router.get('/about',BlockController.about)    // BLOCK CONTROLLER ABOUT ROUTE
router.get('/contact',BlockController.contact)    // BLOCK CONTROLLER CONTACT ROUTE
router.get('/blog',BlockController.blog)
router.get('/login',BlockController.login)
router.get('/detail/:id',BlockController.detail)

router.get('/admin/dashboard',auth,admincontroller.dashboard)      //      ADMIN CONTROLLER 

router.get('/admin/createblog',auth,blogcontroller.createblog)      //      ADMIN CREATE BLOG CONTROLLER
router.post('/admin/bloginsert',auth,imagemiddleware,blogcontroller.bloginsert)
router.get('/admin/displayblog',auth,blogcontroller.displayblog)     //      ADMIN DISPLAY BLOG CONTROLLER
router.get('/viewblog/:id',blogcontroller.viewblog)
router.get('/editblog/:id',blogcontroller.editblog)
router.post('/updateblog/:id',imagemiddleware,blogcontroller.updateblog)
router.get('/deleteblog/:id',blogcontroller.deleteblog)

router.get('/admin/category/createcategory',auth,categorycontroller.createcategory)      //    ADMIN CREATE CATEGORY CONTROLLER
router.post('/admin/category/categoryinsert',auth,categorycontroller.categoryinsert)
router.get('/admin/category/displaycategory',categorycontroller.categorydisplay)    //    ADMIN DISPLAY CATEGORY CONTROLLER   
router.get('/viewcategory/:id',categorycontroller.categoryview)
router.get('/editcategory/:id',categorycontroller.categoryedit)
router.post('/updatecategory/:id',categorycontroller.categoryupdate)
router.get('/deletecategory/:id',categorycontroller.categorydelete)

router.get('/curd/create',Curdcontroller.createform)//  CURD CONTROLLER
router.post('/curd/insert',Curdcontroller.insertdata)
router.get('/curd/display',Curdcontroller.displaydata)
router.get('/curd/view/:id',Curdcontroller.viewdata)
router.get('/curd/edit/:id',Curdcontroller.editdata)
router.post('/curd/update/:id',Curdcontroller.updatedata)
router.get('/curd/delete/:id',Curdcontroller.deletedata)

router.post('/admin/contactinsert',auth,contactcontroller.contactinsert)
router.get('/admin/displaycontact',auth,contactcontroller.contactdisplay)

router.get('/admin/recent/createrecent',auth,recentcontroller.createrecent)
router.post('/admin/recent/recentinsert',auth,imagemiddleware,recentcontroller.recentinsert)
router.get('/admin/recent/recentdisplay',auth,recentcontroller.recentdisplay)

router.get('/admin/createabout',auth,aboutcontroller.aboutcreate)
router.post('/admin/createabout',auth,aboutcontroller.aboutinsert)

router.get('/register',usercontroller.register)
router.post('/registerinsert',usercontroller.registerinsert)
router.post('/verifylogin',usercontroller.verify)
router.get('/logout',usercontroller.logout)

// router.get('/about', (req,res) =>{
//     res
// })


module.exports = router;