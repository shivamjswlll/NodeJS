const express=require('express');

const router=express.router();

router.get("/",async(req,res)=>{
    const allDbUsers=await User.find({});
    return res.json(allDbUsers);
})

router.route("/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=> user.id===id)
    return res.json(user);
})

router.use(express.urlencoded({extended: false}));
router.post("/",async(req,res)=>{
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
   
})

export default router;