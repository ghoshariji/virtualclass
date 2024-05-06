const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  insId: {
    type: String,
    requied: true,
  },
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  examname:[]
});
const courseModel = mongoose.model("coursepremium", courseSchema);
module.exports = courseModel;
