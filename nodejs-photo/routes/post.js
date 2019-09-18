var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

const storage = multer.diskStorage({destination:function(req,file,callback){
    callback(null,"public/images/")
},
filename:function(req,file,callback){
    let extension = path.extname(file.originalname);
    let basename = path.basename(file.originalname,extension);
    console.log(file.path)
    callback(null,file.originalname+"-"+Date.now()+".jpg");
}})

let upload = multer({storage:storage})

router.post('/',upload.single("photo"),function(req,res,next){
    res.send("success")
})

module.exports = router