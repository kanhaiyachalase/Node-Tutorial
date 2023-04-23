// npm = node package maneger (konatahi kanipan karayach asal tar apan fakt tyach package installed karayach)

var http = require("http");

//we import upper case Package

var uc = require("upper-case");

var server = http.createServer(function (req, res) {
  res.write(uc.upperCase("The pagessssss")); // thisis how we declare the package
  res.write("The valu is");
  res.end();
});
server.listen(3001);
console.log("Hii From my side");
