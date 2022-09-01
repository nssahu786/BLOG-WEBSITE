const multer = require('multer')
const path = require('path')

// method
var storage = multer.diskStorage({
    destination: "./public/imageupload/",
    filename: (req,file,cb) =>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
})                  // MULTER CODE 5 to 10

const imageupload = multer({
    storage : storage
}).single('image')    // this image is same as form input name = image 

module.exports = imageupload            // MIDDLE WARE CODE 12 to 16