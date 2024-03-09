const router = require("express").Router();
const fs = require("fs").promises;
router.get("/one", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/one.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});
router.get("/two", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/two.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});
router.get("/three", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/three.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});
router.get("/four", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/four.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});
router.get("/five", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/five.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});
router.get("/six", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/six.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});
router.get("/seven", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/seven.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});
router.get("/eight", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/eight.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});
router.get("/nine", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/nine.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});
router.get("/ten", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/ten.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    res.send({
      message: "Data fetch succesfully",
      data: data,
      success: true,
    });
  } catch (error) {
    console.log("Error" + error);
  }
});

module.exports = router;
