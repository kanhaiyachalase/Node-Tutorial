//Connect node with mySQl not mondo db

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kanhaiya",
});

con.connect(function (error) {
  if (error) throw error;
  console.log("Connected");
});
