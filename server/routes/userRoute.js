const router = require("express").Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware/authMiddleware");
const fs = require("fs").promises;
const multer = require("multer");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const courseModel = require("../model/courseModel");

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
      email: user.email,
      isAdmin: user.isAdmin,
      image: user.image,
      course: [user.course],
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
router.get("/get-ques-list-examname", async (req, res) => {
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
          for (let i = 0; i < resData.length; i++) {
            if (resData[i].examname === req.query.exam) {
              const resData1 = resData[i].questionSet;
              res.status(201).send({
                message: "Data send succesfully",
                success: true,
                data: resData1,
              });
              return;
            }
          }
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
    console.log(req.file.path);
    console.log(req.body.email);
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

router.post("/get-img", async (req, res) => {
  try {
    console.log(req.body);
    const data = await userModel.findOne({ email: req.body.email });
    return res.status(200).send({
      message: "Data send succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});

const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_ID,
  key_secret: process.env.RAZOR_PAY_SECRET,
});

router.post("/checkout", async (req, res) => {
  try {
    console.log(req.body);
    const options = {
      amount: Number(req.body.price * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).send({
      message: "Done",
      data: order,
    });
  } catch (error) {
    console.log("error" + error);
  }
});

router.post("/paymentverification", async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", "2ZxuxUnbMuIvBPz0avekYoh6")
    .update(body.toString())
    .digest("hex");
  const isAuth = razorpay_signature === expectedSignature;
  if (isAuth) {
    const id = req.query.id;
    const course = req.query.courseid;
    try {
      const user = await userModel.findByIdAndUpdate(
        id,
        { $push: { course: course } },
        { new: true }
      );
      res.redirect(
        `${process.env.FRONTEND_URL}/verify/?id=${razorpay_order_id}`
      );
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).send({ message: "Internal server error" });
    }
  } else {
    return res.status(401).send({
      message: "Payment failed",
    });
  }
});
router.get("/get-course-user", async (req, res) => {
  try {
    console.log(req.query.id);
    const data = await userModel.findById(req.query.id);
    const courseIds = data.course;

    let allCourses = [];
    for (const courseId of courseIds) {
      const courseData = await courseModel.findById(courseId);
      allCourses.push(courseData);
    }

    return res.status(200).send({
      message: "Data sent successfully",
      success: true,
      user: data,
      courses: allCourses,
    });
  } catch (error) {
    return res.status(401).send({
      message: error.message,
    });
  }
});

router.put("/edit-name", async (req, res) => {
  try {
    console.log(req.body.name);
    const data = await userModel.findOneAndUpdate(
      { email: req.query.name },
      { name: req.body.name },
      { new: true }
    );
    return res.status(201).send({
      message: "Updated succesfullt",
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(401).send({
      message: error.message,
    });
  }
});

router.get("/start-server", async (req, res) => {
  try {
    return res.status(201).send({
      message: "Server start",
      success: true,
    });
  } catch (error) {
    return res.status(401).send({
      message: error.message,
    });
  }
});
module.exports = router;
