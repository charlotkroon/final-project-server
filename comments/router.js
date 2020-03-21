const { Router } = require("express");
const Comment = require("./model");
const auth = require("../auth/middleware");

const Ticket = require("../tickets/model");
const User = require("../user/model");

const router = new Router();

// //get all the comments
// router.get("/comments/:ticketId", async (req, res, next) => {
//   const allComments = Comment.findAll({
//     include: [
//       {
//         model: Ticket,
//         attributes: ["id"]
//       },
//       {
//         model: User,
//         attributes: ["email"]
//       }
//     ]
//   });
//   res.send(allComments);
// });

// //post 1 comment
// router.post("/comments/:ticketId", async (req, res, next) => {
//   const comment = { comment: req.body.comment, author: req.body.author };
//   const newComment = await Comment.Create(comment);
//   res.send(newComment);
// });

// module.exports = router;

router.get("/events/:ticketId/comments", async (req, res, next) => {
  const { commentId } = req.params;
  const allComments = await Comment.findAll();
  ({ where: { commentId } });
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
  const newComment = await Comment.create(ticket);
  res.send(newComment);
});
