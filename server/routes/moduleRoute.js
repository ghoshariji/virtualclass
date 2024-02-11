const router = require("express").Router();

// module-question api

router.get("/exam/one",async(req,res)=>{
res.sendFile("./exam.json",{root: __dirname});
})

module.exports = router;