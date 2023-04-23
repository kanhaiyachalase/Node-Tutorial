//API with HTTP server
// Apan writeHead type karav lagat

var http = require("http");

var data = { name: "kanhaiya", age: 45, address: "Lakkad Peth Faizpur" };

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "apllicationjson" }); //res.writehead he yacyasathi lihala ki node.js la sangav lagat
  // res.write("{name : 'kanhaiya'}");
  res.write(JSON.stringify(data));
  res.end();
});
server.listen(4000);

console.log("This is the room");
