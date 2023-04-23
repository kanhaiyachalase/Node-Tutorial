//Connect Mongo DB with node.js
//install npm mongoDB and mongoose
//goto online mogo DB websites https://cloud.mongodb.com
//Using Atlas

// 7nzNzSEUiTzsS2S

const express = require("express");

const app = express();
const mongoose = require("mongoose");
const DB =
  "mongodb+srv://kanha:7nzNzSEUiTzsS2S@cluster0.y4312.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log("error"));

//kanha
//7nzNzSEUiTzsS2S
//mongodb+srv://kanha:<password>@cluster0.y4312.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
