const mongoose =require('mongoose');

const user =new mongoose.Schema({
    username:{
        type:String, required:true,minLength:3
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    email:{ 
        type:String,
        required:true,
        unique:[true,'already exists'],
        lowercase:true,
        trim:true
    }
    },{
    timestamps:true
    })

const User =mongoose.model("User",user);

module.exports= User;