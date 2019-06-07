const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = {
  _id: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  contactNumber: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
};

module.exports = mongoose.model("users", userSchema);
