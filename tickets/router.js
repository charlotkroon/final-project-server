const express = require("express");
const Ticket = require("./model");
const User = require("../user/model");
const Event = require("../event/model");
const { Router } = express;
const router = new Router();

//get all tickets
router.get("tickets", async (request, response, next) => {
  try {
    const ticketList = await Ticket.findAll({
      include: [
        {
          model: User,
          attributes: ["username"]
        },
        {
          model: Event,
          attributes: ["name"]
        }
      ]
    });

    response.send(ticketList);
  } catch (error) {
    next(error);
  }
});

// create a ticket
// router.post("/ticket", async (request, response, next) => {
//   try {
//     const {
//       event,
//       author,
//       description,
//       picture,
//       price,
//       eventId
//     } = request.body;

//     const entity = { event, author, description, picture, price, eventId };

//     const ticket = await Ticket.create(entity);

//     response.send(ticket);
//   } catch (error) {
//     next(error);
//   }
// });

// get one ticket by id
router.get("/events/:eventId/tickets", async (req, res, next) => {
  const { eventId } = req.params;

  const allTickets = await Ticket.findAll({
    where: { eventId },
    include: [
      {
        model: User,
        attributes: ["username"]
      },
      {
        model: Event,
        attributes: ["name"]
      }
    ]
  });
  res.send(allTickets);
});

router.post("/events/:eventId/ticket", async (req, res, next) => {
  const userId = req.user.id;
  const { eventId } = req.params;

  const ticket = {
    description: req.body.description,
    picture: req.body.picture,
    price: req.body.price,
    userId: userId,
    eventId: eventId
  };
  const newTicket = await Ticket.create(ticket);

  const inclTicket = await Ticket.findOne({
    where: { id: newTicket.id },
    include: [
      {
        model: User,
        attributes: ["username"]
      },
      {
        model: Event,
        attributes: ["name"]
      }
    ]
  });
  res.send(inclTicket);
});

router.put("/edit/:ticketId", async (req, res, next) => {
  const { ticketId } = req.params;

  const ticketToUpdate = await Ticket.findByPk(ticketId);

  const updatedTicket = await ticketToUpdate.update(req.body);

  const allUpdatedTickets = await Ticket.findAll({
    include: [
      {
        model: User,
        attributes: ["username"]
      },
      {
        model: Event,
        attributes: ["name"]
      }
    ]
  });

  res.send(allUpdatedTickets);
});

// // modify an existing record
// router.put("/ticket/:event", async (request, response, next) => {
//   try {
//     const { event } = request.params;

//     const where = { event };

//     console.log("request.body test:", request.body);

//     const ticket = await Ticket.update(request.body, { where });

//     res.send(ticket);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
