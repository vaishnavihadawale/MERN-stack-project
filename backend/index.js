const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 6000;
const URI =
  "mongodb+srv://gofood:gofoodmern@cluster0.vz4bol2.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URI).catch((err) => {
  console.log("err: ", err);
});
app.get("/", (req, res) => {
  res.send("Hello Expreess!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
