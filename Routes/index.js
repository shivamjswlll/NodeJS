const express=require('express');
const app=express();
const users=require('./MOCK_DATA.json');
const userRouter=require('./routes/user');

const connectMongoDB = require('./connection');

connectMongoDB('mongodb://127.0.0.1:27017/Learning-Mongodb');



app.use('/',userRouter);

app.listen(8000,()=> console.log("Server Started Succesfully"));