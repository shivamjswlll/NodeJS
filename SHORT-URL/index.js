const express=require('express');
const {connectMongoDB}=require('./connect');
const urlroute=require('./routes/url')
const app=express();
const URL=require('./models/url')

connectMongoDB('mongodb://localhost:27017/short-url').
then(console.log('MongoDB connected'));
const PORT=8001;

app.use(express.json());
app.get('/test',(req,res)=>{
    res.send("<h1>Hey from Test</h1>");
})
app.use('/url',urlroute);
app.get('/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;
   const entry= await URL.findOneAndUpdate(
        {
        shortId,
    },
    {
        $push: {
        visitHistory:{
            timestamp: Date.now(),
                    },
    },
    })
    res.redirect(entry.redirectURL);
})



app.listen(PORT,()=> console.log(`Server started at PORT ${PORT}`));