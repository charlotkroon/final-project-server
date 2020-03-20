const { Router } = require("express");
const Comment = require("./model");
// const auth = require("../auth/middleware");

const Ticket = require("../tickets/model");
const User = require("../user/model");

const router = new Router();

//get all the comments
router.get("/comments", async (req, res, next) => {
  const allComments = Comment.findAll({
    include: [
      {
        model: Ticket,
        attributes: ["id"]
      },
      {
        model: User,
        attributes: ["email"]
      }
    ]
  });
  res.send(allComments);
});

//post 1 comment
router.post("./comments/:ticketId", async (req, res, next) => {
  const userId = req.user.id;
  const { ticketId } = req.params;
  const comment = { comment: req.body.comment, author: req.body.author };
  const newComment = await Comment.Create(comment);
  res.send(newComment);
});

module.exports = router;
