const express=require('express');
const {connectMongoDB}=require('./connect');
const urlroute=require('./routes/url')
const app=express();

connectMongoDB('mongodb://localhost:27017/short-url').
then(console.log('MongoDB connected'));
const PORT=8001;


app.listen(PORT,()=> console.log(`Server started at PORT ${PORT}`));