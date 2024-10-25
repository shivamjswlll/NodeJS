const express=require('express');
const {connectMongoDB}=require('./connect');
const path=require('path');
const urlroute=require('./routes/url')
const app=express();
const URL=require('./models/url')
const staticroute=require('./routes/staticrouter');
const { timeStamp } = require('console');

//MongoDB
connectMongoDB('mongodb://localhost:27017/short-url').
then(console.log('MongoDB connected'));
const PORT=8001;

//ejs
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.set('view engine',"ejs");
app.set('views',path.resolve("./views"));

//routes in which using server side rendering with help of ejs
app.get('/test',async(req,res)=>{
    const allUrls= await URL.find({});
    res.render('home',{
        urls:allUrls,
    });
})

//routes
app.use('/url/',urlroute);
app.use('/',staticroute);

app.get('/url/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;
    const entry= await URL.findOneAndUpdate({
        shortId,
    },
    {
        $push:{
            visitHistory:{
                timeStamp: Date.now(),
            }
        }
    }
    
);

const a = `http://${entry.redirectURL}`;
res.redirect(a);
})




app.listen(PORT,()=> console.log(`Server started at PORT ${PORT}`));