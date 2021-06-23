const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());
//import routes
const postRoute = require("./routes/post");

app.use("/posts", postRoute);

app.get("/", (req, res) => {
  res.send("Hii");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },

  () => {
    console.log("connected to dB");
  }
);

// add a listener

app.listen(3002);
