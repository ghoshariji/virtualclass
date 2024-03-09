const router = require("express").Router();
const middleware = require("../middleware/authMiddleware");
const fs = require("fs").promises;

router.post("/one", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/one.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/one.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});
router.post("/two", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/two.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/two.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});
router.post("/three", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/three.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/three.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});
router.post("/four", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/four.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/four.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});
router.post("/five", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/five.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/five.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});
router.post("/six", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/six.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/six.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});
router.post("/seven", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/seven.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/seven.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});
router.post("/eight", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/eight.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/eight.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});
router.post("/nine", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/nine.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/nine.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});
router.post("/ten", async (req, res) => {
  try {
    const dataVal = await fs.readFile("./examjson/ten.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];
    data.push(req.body);
    await fs.writeFile("./examjson/ten.json", JSON.stringify(data));
  } catch (error) {
    console.log("Error" + error);
  }
});

module.exports = router;
