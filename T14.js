//jya file chya puthe pan router define karto tya file la apn call nahi akru shakat

const express = require("express");
const router = express.Router();

const app = express();

const checkurl = function (req, res, next) {
  console.warn("current route", req.checkurl);
  next();
};

app.get("/", function (req, res) {
  res.send("Hello from kanhaiya  middleerware");
});

router.get("/kanha", checkurl, function (req, res) {
  res.send("Hello from  kanhaiya kanhaiya");
});

app.get("/sham", function (req, res) {
  res.send("Hello from  kanhaiya   sham");
});

app.listen(1000);
app.use("", router);

console.log("routing middleware is running");
