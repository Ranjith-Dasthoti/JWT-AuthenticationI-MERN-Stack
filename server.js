const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const user = require("./routes/users");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at port: ${PORT}`);
    });
    console.log("connected to mongodb!");
  })
  .catch(err => {
    console.log(err);
  });

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/user", user);
