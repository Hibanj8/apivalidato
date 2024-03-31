const express = require("express");
const Joi = require("joi");
const User = require("./models/User");

const app = express();
app.use(express.json());

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  repeat_password: Joi.ref("password"),
  birthdate: Joi.date().max("now"),
});

// Route pour l'inscription d'un nouvel utilisateur
app.post("/register", async (req, res) => {
  const userData = req.body;

  const { error, value } = userSchema.validate(userData);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const newUser = new User(value);
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});