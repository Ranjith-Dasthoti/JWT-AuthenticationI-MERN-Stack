const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const users = require("../model/Schema");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../config/keys");
const path = require("path");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log(req.body);
  users.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "user already exists! try login" });
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        const newUserData = new users({
          _id: uuid(),
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          contactNumber: req.body.contactNumber
        });
        bcrypt.hash(newUserData.password, salt, (err, hash) => {
          if (err) throw err;
          newUserData._id = uuid();
          newUserData.password = hash;
          newUserData.save().then(result => {
            res.json({ msg: "data stored" });
          });
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  users.findOne({ email: req.body.email }).then(user => {
    console.log(user);
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        console.log(result);
        if (result) {
          payLoad = { name: user.name, id: user._id };
          jwt.sign(
            payLoad,
            keys.SecretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              return res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else return res.status(400).json({ password: "incorrect password" });
      });
    } else {
      res.status(400).json({ email: "user not found! Please register" });
    }
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
