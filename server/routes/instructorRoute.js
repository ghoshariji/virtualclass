const router = require("express").Router();
const fs = require("fs").promises;
const insModel = require("../model/instructor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const middleware = require("../middleware/authMiddleware");
router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const insExist = await insModel.findOne({ email: req.body.email });
    if (insExist) {
      return res.status(500).send({
        message: "User already exist",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;
    const newIns = new insModel(req.body);
    await newIns.save();
    res.status(200).send({
      message: "New Instructor create succesfully",
      success: true,
    });
  } catch (error) {
    res.send({
      message: "Internal server error",
      success: false,
    });
  }
});
router.post("/login", async (req, res) => {
  try {
    console.log(req.body.email);
    const insExist = await insModel.findOne({ email: req.body.email });
    if (!insExist) {
      res.status(500).send({
        message: "user don't exist",
        success: false,
      });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      insExist.password
    );
    if (!validPassword) {
      return res.status(500).send({
        message: "password don't match",
        success: false,
      });
    }
    // create a token with the specific id and secret key compare and expires in within it 15 days
    const token = jwt.sign({ insID: insExist._id }, process.env.SECRET_KEY, {
      expiresIn: "15d",
    });
    return res.status(200).send({
      message: "Login successfully",
      success: true,
      insID: insExist._id,
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
});
router.get("/get-ins-info", middleware, async (req, res) => {
  try {
    const queParams = req.query.insId;
    const insUser = await insModel.findById(queParams);
    res.status(200).send({
      message: "Data fetch succesfully instructor",
      success: true,
      data: insUser,
      email: insUser.email,
      isInstruct: insUser.isInstructor,
    });
  } catch (error) {
    console.log("Error from the ins page" + error);
    res.status(500).send({
      message: "Data failed to send",
      success: false,
    });
  }
});
router.post("/addclass", async (req, res) => {
  try {
    let id = req.query.id;
    const dataVal = await fs.readFile("./modulejs/module.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    const dataVal1 = await fs.readFile("./modulejs/insmodule.json", "utf-8");
    const data1 = dataVal1 ? JSON.parse(dataVal1) : [];

    data.push(req.body);

    let found = false;

    for (let i = 0; i < data1.length; i++) {
      if (data1[i].id === id) {
        data1[i].allSubject.push(req.body);
        found = true;
        break;
      }
    }

    if (!found) {
      data1.push({
        id: id,
        allSubject: [req.body],
      });
    }

    await fs.writeFile("./modulejs/module.json", JSON.stringify(data));
    await fs.writeFile("./modulejs/insmodule.json", JSON.stringify(data1));
    res.status(200).send({
      message: "class added succesfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});
router.get("/get-class", async (req, res) => {
  try {
    const userID = req.query.userID;
    const dataVal = await fs.readFile("./modulejs/module.json", "utf-8");
    const dataVal1 = await fs.readFile("./modilejs/insmodule.json", "utf-8");
    const data1 = dataVal1 ? JSON.parse(dataVal1) : [];
    const data = dataVal ? JSON.parse(dataVal) : [];
    const insUSer = await insModel.findByID(userID);
    if (!insUSer) {
      res.status(500).send({
        message: "User don't exist",
        success: false,
      });
    }
    data1.push(req.body.email);
    res.status(200).send({
      message: "Data fetch succesfully",
      success: true,
      data: data,
    });
  } catch (error) {
    console.log("Error from the get-class api" + error);
  }
});
router.get("/get-class-admin", async (req, res) => {
  try {
    const queParams = req.query.userId;
    const insUser = await insModel.findById(queParams);
    const dataVal = await fs.readFile("./modulejs/insmodule.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    if (!insUser) {
      return res.status(500).send({
        message: "Instructor not found",
        success: false,
      });
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === queParams) {
        return res.status(200).send({
          message: "Data send succesfully",
          data: data[i].allSubject,
        });
      }
    }
  } catch (error) {
    console.log("Error from the get-class-admin" + error);
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});
router.post("/addexam-ins", async (req, res) => {
  try {
    const queParams = req.query.examName;
    const id = req.query.id;
    const dataVal = await fs.readFile("./modulejs/insmodule.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        const allsub = data[i].allSubject;
        for (let j = 0; j < allsub.length; j++) {
          if (allsub[j].subjectname === queParams) {
            allsub[j].Examname.push(req.body);
            await fs.writeFile(
              "./modulejs/insmodule.json",
              JSON.stringify(data)
            );
            res.status(200).send({
              message: "Data sent successfully",
              success: true,
            });
            return;
          }
        }
      }
    }
    res.status(404).send({
      message: "Subject not found for the given ID and examName",
      success: false,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});
router.post("/addques-ins", async (req, res) => {
  try {
    const id = req.query.id;
    const queParams = req.query.examName;
    const examNm = req.query.examNm;
    const dataVal = await fs.readFile("./modulejs/insmodule.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        const allsub = data[i].allSubject;
        for (let j = 0; j < allsub.length; j++) {
          if (allsub[j].subjectname === queParams) {
            const finalRes = allsub[j].Examname;
            for (let k = 0; k < finalRes.length; k++) {
              if (finalRes[k].examname === examNm) {
                finalRes[k].questionSet.push(req.body);
                await fs.writeFile(
                  "./modulejs/insmodule.json",
                  JSON.stringify(data)
                );

                res.status(200).send({
                  message: "Question added successfully",
                  success: true,
                });

                return;
              }
            }
          }
        }
      }
    }
    res.status(404).send({
      message: "Subject or exam not found for the given ID and examName",
      success: false,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});
router.get("/get-exam-instructor", async (req, res) => {
  try {
    const id = req.query.id;
    const examName = req.query.examName;
    const dataVal = await fs.readFile("./modulejs/insmodule.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        const fetchData = data[i].allSubject;
        for (let j = 0; j < fetchData.length; j++) {
          if (fetchData[j].subjectname === examName) {
            const finalData = fetchData[j].Examname;
            res.status(200).send({
              message: "Data fetch successfully",
              success: true,
              data: finalData,
            });
            return;
          }
        }
      }
    }
    res.status(409).send({
      message: "Instructor not found",
      success: false,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});
router.post("/add-ques-ins", async (req, res) => {
  try {
    const id = req.query.id;
    const examname = req.query.examname;
    const subName = req.query.subname;
    const dataVal = await fs.readFile("./modulejs/insmodule.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        const resData = data[i].allSubject;
        for (let j = 0; j < resData.length; j++) {
          if (resData[j].subjectname === subName) {
            const finalData = resData[i].Examname;
            for (let k = 0; k < finalData.length; i++) {
              if (finalData[k].examname === examname) {
                finalData[k].questionSet.push(req.body);
                await fs.writeFile("./modulejs/insmodule.json",JSON.stringify(data))
                res.status(200).send({
                  message: "Question added succesfully",
                  success: true,
                });
                return;
              }
            }
          }
        }
      }
    }
    res.status(409).send({
      message: "Data failed to send",
      success: false,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});
router.get("/get-ques-user", async (req, res) => {
  try {
    const subname = req.query.subname;
    const dataVal = await fs.readFile("./modulejs/module.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    
    const matchingSubjects = data.filter(item => item.subjectname === subname);
    
    res.send({
      message: "Data sent successfully",
      success: true,
      data: matchingSubjects
    });
  } catch (error) {
    console.log("Error from dynamic data fetch: " + error);
    res.status(500).send({
      message: "Internal Server Error"
    });
  }
});
module.exports = router
