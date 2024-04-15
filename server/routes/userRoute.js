const router = require("express").Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware/authMiddleware");
const fs = require("fs").promises;
const multer = require("multer");
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const unique = file.mimetype.split("/");
    if (
      file.originalname.includes(".jpg") ||
      file.originalname.includes(".jpeg") ||
      file.originalname.includes(".png")
    ) {
      cb(null, file.originalname);
    } else {
      cb(null, file.originalname + "-" + Date.now() + "." + unique[1]);
    }
  },
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
});

const upload = multer({ storage: storage });
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
    console.log(req.body);
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
      userId: user._id,
      name: user.name,
      token: token,
      success: true,
      email:user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/get-user-info", middleware, async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    return res.status(200).send({
      message: "Data send succesfully",
      success: true,
      data: user,
      id: user._id,
      name: user.name,
    });
  } catch (error) {
    return res.status(401).send({
      message: error.message,
      success: false,
    });
  }
});

router.get("/get-module", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./modulejs/module.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.status(200).send({
      message: "Data send succesfully",
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});
router.get("/get-ques-list", async (req, res) => {
  try {
    const subname = req.query.subname;
    const dataVal = await fs.readFile("./modulejs/insmodule.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    let resArray = [];
    for (let i = 0; i < data.length; i++) {
      const subJectArray = data[i].allSubject;
      for (let i = 0; i < subJectArray.length; i++) {
        if (subJectArray[i].subjectname === subname) {
          const resData = subJectArray[i].Examname;
          res.send({
            message: "Data send succesfully",
            success: true,
            data: resData,
          });
          return;
        }
      }
    }
    res.status(500).send({
      message: "No Exam yet now",
      success: false,
    });
  } catch (error) {
    console.log("Error from getting exam list" + error);
  }
});

router.post("/profile-pic-upload", upload.single("file"), async (req, res) => {
  try {
    console.log(req.file.path)
    console.log(req.body.email)
    const data = await userModel.findOneAndUpdate(
      { email: req.body.email },
      { image: req.file.path }
    );
    return res.status(200).send({
      message: "Uploaded succesfully",
      image: req.file.path,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});

router.post("/get-img",async(req,res)=>{
  try {
    console.log(req.body)
    const data = await userModel.findOne({email:req.body.email});
    return res.status(200).send({
      message:"Data send succesfully",
      data:data,
      success:true
    })
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
})
module.exports = router;
