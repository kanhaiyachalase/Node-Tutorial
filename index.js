//Node project chalu kartanna apan adhi environment setup karto command = npm init (kela tar apalyala dedfine karav lagat )  or npm init -y (kel tar by default define houn yet)

var http = require("http");

var server = http.createServer(function (req, res) {
  res.write("Hello from jbhshds");
  res.end();
});
server.listen(3000);
console.log("server is running");
