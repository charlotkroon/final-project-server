const { Router } = require("express");
const Event = require("./model");
const auth = require("../auth/middleware");
const router = new Router();

// router.get("/event", (req, res, next) => {
//   Ticket.findAll()
//     .then(events => res.send(events))
//     .catch(next);
// });

router.post("/event", async (req, res, next) => {
  try {
    const { name, description, picture, startDate, endDate } = req.body;

    const entity = { name, description, picture, startDate, endDate };

    const event = await Event.create(entity);

    res.send(event);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
