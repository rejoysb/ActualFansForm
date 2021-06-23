const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

router.post("/", async (req, res) => {
  const post = new Post({
    userName: req.body.userName,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
  });
  try {
    console.log(req.body);
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
