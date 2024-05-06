const mongoose = require("mongoose");
const userModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    about:
    {
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    image:{
        type:String,
        default:""
    },
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const userSchema = mongoose.model("User",userModel);
module.exports = userSchema;