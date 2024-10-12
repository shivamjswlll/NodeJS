const fs=require('fs');
const app=express();
const users=require('./MOCK_DATA.json');
const userRouter=require('./routes/user');


mongoose.connect('mongodb://127.0.0.1:27017/Learning-Mongodb').
then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log("Error Occured",err))


app.use('/user',userRouter);
// app.get("/user",(req,res)=>{
//     const html=`
//     <ul>
//       ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
//     </ul>`;
//     res.send(html);
// })
app.listen(8000,()=> console.log("Server Started Succesfully"));