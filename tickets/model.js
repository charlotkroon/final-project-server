const Sequelize = require("sequelize");
const db = require("../db");

const Event = require("../event/model");
const User = require("../user/model");
// const Comment = require("../comments/model");

const Ticket = db.define(
  "tickets",
  {
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    logo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL,
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
