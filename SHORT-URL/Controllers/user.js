const user=require('../models/user');
const {v4: uuidv4}=require('uuid');

async function handleSignup(req,res){
    const {name,email,password}=req.body;
    await user.create({
        name,
        email,
        password,
    });
    return res.redirect("/");
}

async function handleUserLogin(req,res){
    const {email,password}=req.body;
    const User = await user.findOne({email,password});
    console.log(User);
    if(!User) return res.render('login',{
        error: "Invalid Username or Password",
    });
    const sessionId = uuidv4();
    return res.redirect('/');
}

module.exports={handleSignup,
    handleUserLogin,
};