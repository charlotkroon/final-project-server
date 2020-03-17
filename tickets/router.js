const express = require("express");
const Ticket = require("./model");
const { Router } = express;
const router = new Router();

router.get("ticket", async (request, response, next) => {
  try {
    const ticketList = await Ticket.findAll();

    response.send(ticketList);
  } catch (error) {
    next(error);
  }
});

// create a ticket
router.post("/ticket", async (request, response, next) => {
  try {
    const {
      event,
      author,
      description,
      picture,
      price,
      eventId
    } = request.body;

    const entity = { event, author, description, picture, price, eventId };

    const ticket = await Ticket.create(entity);

    response.send(ticket);
  } catch (error) {
    next(error);
  }
});

// get one ticket by id
router.get(
  "/ticket/:event", // path with an id parameter
  async (request, response, next) => {
    // handler callback
    try {
      // pick what parameters we want
      const { event } = request.params;

      const where = { event };

      const ticket = await Ticket.findOne({ where });

      response.send(ticket);
    } catch (error) {
      next(error);
    }
  }
);

// modify an existing record
router.put("/ticket/:event", async (request, response, next) => {
  try {
    const { event } = request.params;

    const where = { event };

    console.log("request.body test:", request.body);

    const ticket = await Ticket.update(request.body, { where });

    res.send(ticket);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
