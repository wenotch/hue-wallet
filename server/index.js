//requiring everionmental variables.
require("dotenv").config();

// importing packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

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

// mongoDB schemas
var SchemaTypes = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  balance: String,
  transactions: {
    sender: String,
    receiver: String,
    amount: SchemaTypes.Double,
    transactionId: String,
    status: Boolean,
    description: String,
    date: String,
  },
  email: String,
});
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);

//4. Passport

app.use(passport.initialize());
passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//Endpoints Creations
app.get("/register", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const balance = "0";
  res.send("<h1> weldone oooooo</h1>");
});

//listening on port
const port = 5000;
app.listen(process.env.PORT || port, function () {
  console.log("Application is running " + port);
});
