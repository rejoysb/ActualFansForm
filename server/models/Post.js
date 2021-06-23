const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  referCode: String,
});
module.exports = mongoose.model("Posts", postSchema);
