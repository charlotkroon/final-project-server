const { Router } = require("express");
const Comment = require("./model");
const auth = require("../auth/middleware");

// const Ticket = require("../tickets/model");
// const User = require("../user/model");

const router = new Router();

router.get("/events/:ticketId/comments", async (req, res, next) => {
  const { ticketId } = req.params;
  const allComments = await Comment.findAll({ where: { ticketId } });
  res.send(allComments);
});

router.get("/allComments", async (req, res, next) => {
  const allComments = await Comment.findAll();
  res.send(allComments);
});

router.post("/events/:ticketId/comments", auth, async (req, res, next) => {
  console.log("reqqq?", req.user);
  const { ticketId } = req.params;
  const comment = {
    comment: req.body.comment,
    author: req.body.author,
    userId: req.user.id,
    ticketId: ticketId
  };
  const newComment = await Comment.create(comment);
  res.send(newComment);
});

module.exports = router;
