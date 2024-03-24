const router = require("express").Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware/authMiddleware")
const fs = require("fs").promises;
// installing bcrypt and jwt

//   creating the user route registration

router.post("/signup", async (req, res) => {
  try {
    // checking if the user exist or not
    const userExist = await userModel.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(500)
        .send({ message: "User already Exist", success: false });
    }
    // hasing the password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;

    // creating a new user

    const newUser = new userModel(req.body);

    // saving the user detail in the database

    await newUser.save();
    res.status(200).send({
      message: "USer created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// login api

router.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(500).send({ message: "user don't exist" });
      return;
    }
    // check valid-password

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(500).send({ message: "Error" });
    }

    // generating token for expiring the login facilty automatically after 30 days
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });

   return res.status(200).send({
      message: "User login successfully",
      success: true,
      userId:user._id,
      token:token,
      success:true
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/get-user-info", middleware,async (req, res) => {
  try {
    const userId = req.query.userId; // Retrieve userId from query parameters
    const user = await userModel.findById(userId);

    res.status(200).send({
      message: "User info fetch",
      success: true,
      data: user,
      isAdmin: user.isAdmin,
      name:user.name
    });
  } catch (error) {
    console.log("Error from fetch user details: " + error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
});

router.get("/get-module",async(req,res)=>{
  try {
    const dataVal = await fs.readFile("./modulejs/module.json","utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.status(200).send({
      message:"Data send succesfully",
      success:true,
      data:data
    })
  } catch (error) {
    res.status(500).send({
      message:error.message,
      success:false
    })
  }
})
router.get("/get-ques-list",async(req,res)=>{
  try {
    const subname = req.query.subname;
  const dataVal = await fs.readFile("./modulejs/insmodule.json","utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  let resArray = []
  for(let i=0;i<data.length;i++)
  {
    const subJectArray =  data[i].allSubject;
    for(let i=0;i<subJectArray.length;i++)
    {
      if(subJectArray[i].subjectname===subname)
      {
        const resData = subJectArray[i].Examname
        res.send({
          message:"Data send succesfully",
          success:true,
          data:resData
        })
        return;
      }
    }
  }
res.status(500).send({
  message:"No Exam yet now",
  success:false
})
  } catch (error) {
    console.log("Error from getting exam list" + error)
  }
  
})
module.exports = router;
