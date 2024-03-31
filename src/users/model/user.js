const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  repeat_password: Joi.ref("password"),
  birthdate: Joi.date().max("now"),
});

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
