const { Router } = require("express");
const Event = require("./model");
const auth = require("../auth/middleware");
const router = new Router();

router.get("/event", (req, res, next) => {
  Ticket.findAll()
    .then(events => res.send(events))
    .catch(next);
});

router.post("/event", auth, (req, res, next) => {
  Event.create(req.body)
    .then(event => res.send(event))
    .catch(next);
});

module.exports = router;
