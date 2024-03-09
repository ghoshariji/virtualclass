const router = require("express").Router();
const contactModel = require("../model/userContact");

router.post("/contact",async(req,res)=>{
    try {
        const newContact = new contactModel(req.body);
        await newContact.save()
        res.send({
            message:"Contact save",
            success:true
        })
    } catch (error) {
        res.status(500).send({
            message:error.message,
            success:false
        })
    }
})

module.exports = router