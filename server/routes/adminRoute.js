const router = require("express").Router();
const insModel = require("../model/instructor");
const nodemailer = require("nodemailer");
const userModel = require("../model/userModel")
const bcrypt = require("bcryptjs")

router.get("/get-ins-details", async (req, res) => {
  try {
    const insFind = await insModel.find({});
    res.status(200).send({
      message: "Data fetch succesfully",
      success: true,
      data: insFind,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});
router.put("/makeins", async (req, res) => {
  try {
    const emailQuery = req.query.email;
    await insModel.findOneAndUpdate(
      { email: emailQuery },
      { isInstructor: true }
    );
    res.send({
      message: "Update true succesfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});
router.put("/removins", async (req, res) => {
  try {
    const emailQuery = req.query.email;
    await insModel.findOneAndUpdate(
      { email: emailQuery },
      { isInstructor: false }
    );
    res.send({
      message: "Update true succesfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});
router.get("/generate-otp", async (req, res) => {
  try {
    const senderEmail = req.query.email;
    console.log(senderEmail)
    const otp = Math.floor(100000 + Math.random() * 900000);
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.APP_PASS,
      },
    });
    const main = async () => {
      const info = transport.sendMail({
        from: {
          name: "eLearn",
          address: process.env.USER,
        },
        to: senderEmail,
        subject: "Password change OTP",
        text:`your otp is ${otp}`,
        html: `<b>Your OTP: ${otp}</b>`,
      });
    };
    main().then(() => {
      res.status(200).send({
        message: "otp send succfully",
        success: true,
        data: otp,
      });
    });
  } catch (error) {
    res.status(409).send({
        message:error.message,
        success:false
    })
  }
});
router.post("/change-pass",async(req,res)=>{
  try {
    const email = req.query.email;
    console.log(email)
    console.log(req.body.password)
    const isExist = await userModel.findOneAndUpdate({email:email},{cpassword:req.body.password})
    if(!isExist)
    {
      return res.status(409).send({
        message:"User don't exist",
        success:false
      })
    }
    const salt = await bcrypt.genSalt(10);
    const hassPassword = await bcrypt.hash(req.body.password,salt);
    req.body.password = hassPassword;
    await userModel.findOneAndUpdate({email:email},{password:req.body.password})
    return res.status(200).send({
      message:"Changed successfully",
      success:true
    })
  } catch (error) {
    return res.status(500).send({
      message:error.message,
      success:false
    })
  }
})
module.exports = router;
