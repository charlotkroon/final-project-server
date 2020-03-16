const { Router } = require("express");
const Ticket = require("./model");
const auth = require("../auth/middleware");

const router = new Router();
router.get("/ticket", (req, res, next) => {
  Ticket.findAll()
    .then(tickets => res.send(tickets))
    .catch(next);
});

router.post("/ticket", auth, (req, res, next) => {
  Ticket.create(req.body)
    .then(ticket => res.send(ticket))
    .catch(next);
});

module.exports = router;
