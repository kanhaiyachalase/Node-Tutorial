// Install express and how to use

//we import  the express in out project
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello from express");
});

app.listen(3500);

console.log("server is running on express");
