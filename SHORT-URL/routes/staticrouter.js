const express=require('express');
const URL = require('../models/url');

const router=express.Router();

router.get('/',async(req,res)=>{
    const allurls=URL.find({});
    res.render('home',{
        url: allurls,
    })
})
module.exports=router;