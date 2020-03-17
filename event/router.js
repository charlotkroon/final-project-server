const express = require("express");
const Event = require("./model");
const { Router } = express;

const router = new Router();

// get all events
router.get(
  "/event", // path
  async (request, response, next) => {
    try {
      const events = await Event.findAll();
      response.send(events);
    } catch (error) {
      next(error);
    }
  }
);

// create an event
router.post("/event", async (request, response, next) => {
  try {
    const { name, description, picture, startDate, endDate } = request.body;

    const entity = { name, description, picture, startDate, endDate };

    const event = await Event.create(entity);

    response.send(event);
  } catch (error) {
    next(error);
  }
});

// get one event by id
router.get("/event/:id", async (request, response, next) => {
  try {
    const { id } = request.params;

    const event = await Event.findByPk(id);
    response.send(event);
  } catch (error) {
    next(error);
  }
});

// modify an existing record
router.put("/event/:name", async (request, response, next) => {
  try {
    const { id } = request.params;

    const event = await Event.findByPk(id);

    console.log("req.body test:", request.body);

    const updated = await event.update(request.body);

    response.send(updated);
  } catch (error) {
    next(error);
  }
});

// //delete an event
// router.delete("/events", async (req, res, next) => {
//   try {
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
