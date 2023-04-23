//Templates Engine
// tmplates engine html cha content allow karte server kade
//khup sare templates engine ahe pan apan npm ejs use karu
//apalyal ejs define akarav lagat
//the  apalyala views navach folder create karav lagat
//Ani tyachyat te te html file include karavya lagata
//ani tya file la ejs navane save karav lagat

const express = require("express");

const app = express();

app.set("view engine", "ejs"); // aplaya la ejs define karave lagat

app.get("/", function (req, res) {
  res.render("kanhaiya");
});

app.listen(2500);
console.log(" Hello students");
