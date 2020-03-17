const Sequelize = require("sequelize");
const db = require("../db");

const Event = require("../event/model");
const User = require("../user/model");

const Ticket = db.define(
  "ticket",
  {
    author: {
      type: Sequelize.TEXT,
      defaultValue: "harry potter",
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      defaultValue: "a great event with lots of spells",
      allowNull: false
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: true
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "tickets"
  }
);

Ticket.belongsTo(Event);
Ticket.belongsTo(User);

module.exports = Ticket;

//Picture has:
// -price
// -description
// -author
// -picture (optional)
