const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./model");

const router = express.Router();

async function addUser(req, res, next) {
  try {
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 10);

    const addUser = await User.create({ email, password });

    res.send(addUser);
  } catch (error) {
    next(error);
  }
}

router.post("/user", addUser);

module.exports = router;
