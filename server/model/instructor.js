const mongoose = require("mongoose");
const insmodel = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isInstructor:{
        type:Boolean,
        default:false
    }
})
const insSchema = mongoose.model("Instructors",insmodel)
module.exports = insSchema