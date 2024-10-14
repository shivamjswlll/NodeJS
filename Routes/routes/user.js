const express=require('express');
const User=require('../model/user');

const {getUserById,getAllUser,postUser}=require('../controller/user')

const router=express.Router();

router.get("/",getAllUser);

router.get("/:id",getUserById);

router.use(express.urlencoded({extended: false}));
router.post("/",postUser);

module.exports=router;

// app.get("/user",(req,res)=>{
//     const html=`
//     <ul>
//       ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
//     </ul>`;
//     res.send(html);
// })