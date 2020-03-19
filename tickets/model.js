const Sequelize = require("sequelize");
const db = require("../db");

const Event = require("../event/model");
const User = require("../user/model");

const Ticket = db.define(
  "tickets",
  {
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: true
    },
    author: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  {
    timestamps: true
  }
);

Ticket.belongsTo(Event);
Ticket.belongsTo(User);

module.exports = Ticket;
