const router = require("express").Router();
const fs = require("fs").promises
router.get("/getexam",async(req,res)=>{
    const dataVal = await fs.readFile("./examjson/one.json","utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
        message:"Data fetch succesfully",
        data:data,
        success:true
    })
})
module.exports = router