//Routing
//Routing refers to how an application’s endpoints (URIs) respond to client requests
//Multiple page apan tayar karu shakata

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello from Home");
});

app.get("/about", function (req, res) {
  res.send("hello from About");
});

app.get("/login", function (req, res) {
  res.send("hello from Login");
});

app.listen(9000);

console.log("server success ful running");
