//How to open file into route

const express = require("express");
const router = express.Router();

const app = express();

const checkurl = function (req, res, next) {
  console.warn("current route", req.checkurl);
  next();
};

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/Home.html");
});
9;
router.get("/login", checkurl, function (req, res) {
  res.sendFile(__dirname + "/Login.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/About.html");
});

app.listen(1500);
app.use("", router);

console.log("routing middleware is running");
