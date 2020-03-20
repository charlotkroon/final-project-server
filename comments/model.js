const Sequelize = require("sequelize");
const db = require("../db");

const User = require("../user/model");
const Ticket = require("../tickets/model");

const Comment = db.define(
  "comment",
  {
    message: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true
  }
);

Comment.belongsTo(Ticket);
Comment.belongsTo(User);

module.exports = Comment;
