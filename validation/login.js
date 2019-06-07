const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateLoginInput = data => {
  let errors = {};

  data.password = isEmpty(data.password) ? "" : data.password;
  data.email = !isEmpty(data.email) ? data.email : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 16 })) {
    errors.password = "Password must be between 6 and 16 characters";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateLoginInput;
