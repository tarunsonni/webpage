const mongoose = require("mongoose");
//const validator = require("validator");


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    message:{
        type:String,
        required:true,
        minLength:3
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;