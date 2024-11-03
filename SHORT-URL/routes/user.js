const express=require('express');
const  {handleSignup,handleUserLogin} =require('../Controllers/user');

const router=express.Router();

router.post('/',handleSignup);
router.post('/login',handleUserLogin);




module.exports= router;