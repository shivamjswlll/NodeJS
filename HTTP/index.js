// console.log("Http server");
const http=require("http");
const fs=require("fs");
const url=require('url');
const querystring = require('querystring');

const myServer=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico') return res.end();
    const myUrl= url.parse(req.url,true);
    console.log(myUrl);
    const log=`${Date.now()} ${myUrl.pathname} New Req recieved \n`;
    
    switch(myUrl.pathname){
        case "/":
            res.end("Home Page")
            break;
        case "/about":
            // const queryParams = querystring.parse(myUrl.query);
            // const reg = queryParams.user_name;
            const reg=myUrl.query.user_name;
            res.end(`About page for ${reg}`)
            break;
        case "/contact-us":
            res.end("9399392993 is my contact number");
            break;
            default:
                res.end("404 Not Found")
    }
    fs.appendFile("./log.txt",log,(err,data)=>{
        res.end("Hello from server");
    })
    
})

myServer.listen(8000,()=>console.log("Server Started Successfully"));
