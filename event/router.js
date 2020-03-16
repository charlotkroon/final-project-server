const { Router } = require("express");
const Event = require("./model");
// const auth = require("../auth/middleware");
const router = new Router();

// get all events
router.get(
  "/events", // path
  async (req, res, next) => {
    try {
      const eventList = await Event.findAll();
      response.send(eventList);
    } catch (error) {
      next(error);
    }
  }
);

// create an event
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

// get one event by id
router.get("/events/:name", async (req, res, next) => {
  try {
    const { name } = request.params;
    const where = { name };
    const events = await Events.findOne({ where });
    response.send(species);
  } catch (error) {
    next(error);
  }
});

// modify an existing record
router.put("/events/:name", async (req, res, next) => {
  try {
    const { name } = request.params;

    const where = { name };
    const query = { where };

    console.log("req.body test:", req.body);

    const countArray = await Events.update(req.body, query);

    res.send(countArray);
  } catch (error) {
    next(error);
  }
});

//delete an event
router.delete("/events", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
