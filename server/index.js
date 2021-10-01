//requiring everionmental variables.
require("dotenv").config();

// importing packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// configuring middlewares

// 1. express
const app = express();
app.use(express.static("public"));

// 2.body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// 3. mongoose
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //if all is ok
    console.log("connected");
  })
  .catch((err) => {
    // we will not be here...
    console.error("Connection Error: ", err.stack);
  });

//listening on port
const port = 5000;
app.listen(process.env.PORT || port, function () {
  console.log("Application is running " + port);
});
