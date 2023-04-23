//Middlerware
//Middlerware is lie between two layer
//Middlewares are functions used in connecting a bunch of isolated systems to interact and perform certain tasks.
const express = require("express");

const app = express();

const checkurl = function (req, res, next) {
  console.warn("current route", req.checkurl);
  next();
};
app.use(checkurl);

app.get("/", function (req, res) {
  res.send("Hello from middleerware");
});
app.get("/kanha", function (req, res) {
  res.send("Hello from kanhaiya");
});

app.get("/sham", function (req, res) {
  res.send("Hello from sham");
});

app.listen(9500);

console.log("Middlerware is running");
