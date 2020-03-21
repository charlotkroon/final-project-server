const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./model");
const auth = require("../auth/middleware");

const router = express.Router();

router.get("/users", async (req, res, next) => {
  const allUsers = await User.findAll();
  res.send(allUsers);
});

router.post("/user", auth, async (req, res, next) => {
  console.log("userrr", req.user);
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };

  if (user.password && user.email) {
    const newUser = await User.create(user);

    res.send(newUser);
  }
});
module.exports = router;
