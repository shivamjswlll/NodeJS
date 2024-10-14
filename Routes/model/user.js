const mongoose=require('mongoose');

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

},{timestamps:true});

const User=mongoose.model("model",userSchema);

module.exports=User;



