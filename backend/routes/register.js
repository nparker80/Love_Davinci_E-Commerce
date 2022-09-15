const bcrypt = require("bcrypt");
const Joi = require("joi");
const express = require("express");
const { User } = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(15).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).required(),

  });

  const { error } = schema.validate(req.body)
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email })

  if (user) return res.status(400).send("An account associated with this email exists. Please sign in or register with a new email.");

  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)

  await user.save();
});