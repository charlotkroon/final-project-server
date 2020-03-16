const { Router } = require("express");
const Ticket = require("./model");
const auth = require("../auth/middleware");
const router = new Router();

// create an ticket
router.post("/ticket", async (req, res, next) => {
  try {
    const { event, author, description, picture, price } = req.body;
    const entity = { event, author, description, picture, price };
    const ticket = await Ticket.create(entity);
    res.send(ticket);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
