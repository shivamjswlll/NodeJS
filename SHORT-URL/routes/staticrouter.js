const express=require('express');
const URL = require('../models/url');

const router=express.Router();

router.get('/',async(req,res)=>{
    
    res.render('home')
})
module.exports=router;