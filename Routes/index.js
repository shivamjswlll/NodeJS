const express=require('express');
const fs=require('fs');
const app=express();
const users=require('./MOCK_DATA.json');
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Learning-Mongodb').
then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log("Error Occured",err))


const userSchema= new mongoose.Schema({
    first_name:{
        type: String,
        require: true,
    },
    last_name:{
        type: String,
        require:false,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    jobtitle:{
        type: String,
    },
    gender:{
        type: String,
    }

});

const User=mongoose.model("model",userSchema);

app.route("/api/user/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=> user.id===id)
    return res.json(user);
})

app.use(express.urlencoded({extended: false}));
app.post("/api/user",async(req,res)=>{
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

// app.get("/user",(req,res)=>{
//     const html=`
//     <ul>
//       ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
//     </ul>`;
//     res.send(html);
// })
app.listen(8000,()=> console.log("Server Started Succesfully"));