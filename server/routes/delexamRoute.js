const router = require("express").Router();
const fs = require("fs").promises;

router.delete("/one", async (req, res) => {
  try {
    let queParam = req.query.examname;
    const dataVal = await fs.readFile("./examjson/one.json", "utf-8");
    const data = dataVal ? JSON.parse(dataVal) : [];

    const findIndex = data.findIndex((item) => item.examname === queParam);

    if (findIndex !== -1) {
      data.splice(findIndex, 1);
    } else {
      res.send({
        message: "Exam not found",
        success:false
      });
      return; // Exit the function early to avoid sending a second response
    }

    await fs.writeFile("./examjson/one.json", JSON.stringify(data), "utf-8");
    res.send({
      message: "Delete data successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
});

module.exports = router;
