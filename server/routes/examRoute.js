const router = require("express").Router();
const fs = require("fs").promises;

router.post("/addexam",async(req,res)=>{
    try {
        const dataVal =  await fs.readFile("./examjson/one.json","utf-8");
        
        const data = dataVal ? JSON.parse(dataVal) : []
        data.push(req.body)
        await fs.writeFile("./examjson/one.json",JSON.stringify(data))
        res.send({
            message:"Exam added succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the add exam" + error)
    }
})
module.exports = router