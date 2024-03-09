const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      const { userId } = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await userModel.findById(userId).select("-password");
      next();
    } catch (error) {
      res.status(401).send({
        message: "Unauthorized",
        success: false,
      });
    }
  }
};
