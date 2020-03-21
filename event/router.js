const { Router } = require("express");
const Event = require("./model");
const auth = require("../auth/middleware");

const router = new Router();

router.get("/events", async (req, res, next) => {
  const allEvents = await Event.findAll();
  res.send(allEvents);
});

router.post("/event", auth, async (req, res, next) => {
  console.log("hallo?! reqje??");
  const event = {
    name: req.body.name,
    description: req.body.description,
    logo: req.body.logo,
    startDate: req.body.startDate,
    userId: req.user.id,
    endDate: req.body.endDate
  };
  const newEvent = await Event.create(event);
  res.send(newEvent);
});

module.exports = router;
