//How to create html page

var http = require("http");

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<input>HEllo kanhaiya </input>");
  res.end();
});
server.listen(5000);
console.log("Surver is ruunning");
