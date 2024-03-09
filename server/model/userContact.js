const mongoose = require("mongoose");
const contactModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const contactSchema = mongoose.model("Contact",contactModel);
module.exports = contactSchema;