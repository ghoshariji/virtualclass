const router = require("express").Router();
const fs = require("fs").promises;

router.get("/one", async (req, res) => {
  const dataVal = await fs.readFile("./modulejson/onemod.json", "utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  res.send({
    message: "module data send succesfully",
    data: data,
    success: true,
  });
});
router.get("/two", async (req, res) => {
  const dataVal = await fs.readFile("./modulejson/twomod.json", "utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  res.send({
    message: "module data send succesfully",
    data: data,
    success: true,
  });
});
router.get("/three", async (req, res) => {
  const dataVal = await fs.readFile("./modulejson/threemod.json", "utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  res.send({
    message: "module data send succesfully",
    data: data,
    success: true,
  });
});
router.get("/four", async (req, res) => {
  const dataVal = await fs.readFile("./modulejson/fourmod.json", "utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  res.send({
    message: "module data send succesfully",
    data: data,
    success: true,
  });
});
router.get("/five", async (req, res) => {
  const dataVal = await fs.readFile("./modulejson/sixmod.json", "utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  res.send({
    message: "module data send succesfully",
    data: data,
    success: true,
  });
});
router.get("/seven", async (req, res) => {
  const dataVal = await fs.readFile("./modulejson/sevenmod.json", "utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  res.send({
    message: "module data send succesfully",
    data: data,
    success: true,
  });
});
router.get("/eight", async (req, res) => {
  const dataVal = await fs.readFile("./modulejson/eightmod.json", "utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  res.send({
    message: "module data send succesfully",
    data: data,
    success: true,
  });
});
router.get("/nine", async (req, res) => {
  const dataVal = await fs.readFile("./modulejson/ninemod.json", "utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  res.send({
    message: "module data send succesfully",
    data: data,
    success: true,
  });
});
router.get("/ten", async (req, res) => {
  const dataVal = await fs.readFile("./modulejson/tenmod.json", "utf-8");
  const data = dataVal ? JSON.parse(dataVal) : [];
  res.send({
    message: "module data send succesfully",
    data: data,
    success: true,
  });
});

module.exports = router;
