const express =require('express');
const { handleGenerateNewShortURL }=require('../Controllers/url')

const router=express.Router();

router.post('/',handleGenerateNewShortURL);

module.exports=router;