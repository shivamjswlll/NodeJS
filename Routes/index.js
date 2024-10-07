const express=require('express');
const fs=require('fs');
const app=express();
const users=require('./MOCK_DATA.json');
app.route("/api/user/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=> user.id===id)
    return res.json(user);
})

app.use(express.urlencoded({extended: false}));
app.post("/api/user",(req,res)=>{
    const body=req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status: "Pending",id: users.length});
    });
    
   
})

app.get("/user",(req,res)=>{
    const html=`
    <ul>
      ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html);
})
app.listen(8000,()=> console.log("Server Started Succesfully"));