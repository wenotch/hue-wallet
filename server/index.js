//requiring everionmental variables.

// importing packages
const express = require("express");
const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// configuring middlewares

// 1. express
const app = express();
app.use(express.static("public"));

app.use(express.json());

// 3. mongoose
mongoose
  .connect("mongodb://localhost:27017/example", {
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
  balance: SchemaTypes.Double,
  transactions: {
    sender: String,
    receiver: String,
    amount: SchemaTypes.Double,
    transactionId: String,
    status: String,
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

//Endpoints begins here

//1. register
app.post("/register", (req, res) => {
  User.register(
    {
      username: req.body.username,
      fname: req.body.fname,
      lname: req.body.lname,
      balance: 0,
      email: req.body.username,
    },
    req.body.password,
    async (err, user) => {
      if (err) {
        res.send(err).json();
        console.log("not registered ");
      } else {
        const accessToken = jwt.sign(
          { username: user.username },
          "thisisthelegendarysecretkey"
        );
        console.log("registered " + user.username);
        res.json({
          username: user.username,
          accessToken: accessToken,
        });
      }
    }
  );
});

//2. login
app.post("/login", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, async function (err) {
    if (err) {
      await res.json(err);
    } else {
      User.findOne(
        { username: user.username },
        async function (err, foundUser) {
          if (err) {
            res.json(err);
          } else {
            res.json(foundUser);
          }
        }
      );
    }
  });
});

//3. transact

app.post("/transact", (req, res) => {
  const transaction = {
    sender: req.body.sender,
    receiver: req.body.receiver,
    amount: req.body.amount,
    transactionId: req.body.transactionId,
    description: req.body.description,
    date: req.body.date,
    status: "successful",
  };

  // debits sender
  User.findOne({ username: transaction.sender }, async (err, foundUser) => {
    if (err) {
      res.send(err).json();
    } else {
      console.log(foundUser.balance);
      const newbalance = foundUser.balance - transaction.amount;
      User.findOneAndUpdate(
        { username: transaction.sender },
        { balance: newbalance.toFixed(2), transactions: transaction },
        (err) => {
          if (err) {
            res.send(err);
          } else {
            console.log("Debited sender");
          }
        }
      );
    }
  });
  // credits the receiver
  User.findOne({ username: transaction.receiver }, async (err, foundUser) => {
    if (err) {
      res.send(err).json();
    } else {
      console.log(foundUser.balance);
      const newbalance = foundUser.balance + transaction.amount;
      User.findOneAndUpdate(
        { username: transaction.receiver },
        { balance: newbalance.toFixed(2), transactions: transaction },
        (err) => {
          if (err) {
            res.send(err);
          } else {
            console.log("Credited receiver");
          }
        }
      );
    }
  });

  res.send("i think is done");
});
//listening on port
const port = 5000;
app.listen(process.env.PORT || port, function () {
  console.log("Application is running on " + port);
});
