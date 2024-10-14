const User=require('../model/user');

async function getUserById(req,res){
    const id=req.params.id;
    const user=await User.findById(id);
    return res.json(user);
}

async function getAllUser(req,res){
        const allDbUsers=await User.find({});
        return res.json(allDbUsers);
}

const postUser=async(req,res)=>{
    const body=req.body;
    if(!body.first_name||
        !body.last_name||
        !body.email||
        !body.gender
    ){
        return res.status(400).json({msg:"All fields are required"});
    }
   const result= await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
    })
    
    return res.status(200).json({msg:"Success"});
   
}


module.exports={
    getUserById,
    getAllUser,
    postUser,
}