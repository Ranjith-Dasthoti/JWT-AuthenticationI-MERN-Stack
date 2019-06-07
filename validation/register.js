const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateRegisterInput = data => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.contactNumber = !isEmpty(data.contactNumber) ? data.contactNumber : "";
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

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
  if (!Validator.isLength(data.contactNumber, { min: 10, max: 10 })) {
    errors.contactNumber = "Contact Number must have 10 digits";
  }
  if (Validator.isEmpty(data.contactNumber)) {
    errors.contactNumber = "Contact number is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateRegisterInput;
