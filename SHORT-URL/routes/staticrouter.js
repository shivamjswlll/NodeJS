const express=require('express');
const URL = require('../models/url');

const router=express.Router();

router.get('/',async(req,res)=>{
    const allUrls= await URL.find({});
    res.render('home',{
        url: allUrls,

    });
})
router.get('/login',(req,res)=>{
    return res.render('login')
})

router.get('/signup',(req,res)=>{
    res.render('signup');
})
module.exports=router;