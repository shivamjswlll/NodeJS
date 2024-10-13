const fs=require('fs');
const app=express();
const users=require('./MOCK_DATA.json');
const userRouter=require('./routes/user');

const {connectMongoDB}=require('./connection');
connectMongoDB('mongodb://127.0.0.1:27017/Learning-Mongodb');



app.use('/user',userRouter);
// app.get("/user",(req,res)=>{
//     const html=`
//     <ul>
//       ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
//     </ul>`;
//     res.send(html);
// })
app.listen(8000,()=> console.log("Server Started Succesfully"));