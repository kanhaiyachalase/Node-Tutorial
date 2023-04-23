//How to show Html page
// Need to declare fs module

var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  fs.readFile("t8.html", function (err, data) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(data);
    res.end();
  });
});
server.listen(3000);
console.log("html page");
