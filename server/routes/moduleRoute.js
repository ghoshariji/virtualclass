const router = require("express").Router();
const fs = require("fs").promises;

// module-question api

router.post("/one",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/onemod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/onemod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})
router.post("/two",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/twomod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/twomod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})
router.post("/three",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/threemod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/threemod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})
router.post("/four",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/fourmod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/fourmod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})
router.post("/five",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/fivemod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/fivemod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})
router.post("/six",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/sixmod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/sixmod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})
router.post("/seven",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/sevenmod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/sevenmod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})
router.post("/eight",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/eightmod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/eightmod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})
router.post("/nine",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/ninemod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/ninemod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})
router.post("/ten",async(req,res)=>{
    try {
        const dataVal = await fs.readFile("./modulejson/tenmod.json","utf-8");
        const data = dataVal ? JSON.parse(dataVal) : [];
        data.push(req.body)
        await fs.writeFile("./modulejson/tenmod.json",JSON.stringify(data))
        res.send({
            message:"Data saved succesfully",
            success:true
        })
    } catch (error) {
        console.log("Error from the admon send the module")
    }
})


module.exports = router;