const user=require('../models/user');

async function handleSignup(req,res){
    const {name,email,password}=req.body;
    await user.create({
        name,
        email,
        password,
    });
    return res.render('home');
}
module.exports=handleSignup;