//nodemon = apalyala double program run nahi Karu mhanun apan nodemon install karata

// command
var http = require("http");

var server = http.createServer(function (req, res) {
  res.write("Node Mon wk");
  res.end();
});
server.listen(7500);
console.log("Helo bhai nodemon from the side");
