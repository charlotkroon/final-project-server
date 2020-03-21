const { Router } = require("express");
const Ticket = require("./model");
const auth = require("../auth/middleware");

const router = new Router();

router.get("/events/:eventId/tickets", async (req, res, next) => {
  const { eventId } = req.params;
  const allTickets = await Ticket.findAll();
  ({ where: { eventId } });
  res.send(allTickets);
});

router.post("/events/:eventId/ticket", auth, async (req, res, next) => {
  console.log("reqqq?", req.user);
  const { eventId } = req.params;
  const ticket = {
    description: req.body.description,
    logo: req.body.logo,
    author: req.body.author,
    price: req.body.price,
    userId: req.user.id,
    eventId: eventId
  };
  const newTicket = await Ticket.create(ticket);
  res.send(newTicket);
});
//Nu kan iedereen ticket posten. AUTH middleawre is nodig. En daar kan e ook id van gebruiker uithalen.
//Bearer token nodig.

module.exports = router;

//EVENT: UserId (net als bij ticket) --> opslaan met token --> meesturen naar frontend
//Risk Algortime
