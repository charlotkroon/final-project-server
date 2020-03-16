const Sequelize = require("sequelize");
const db = require("../db");

const Ticket = db.define(
  "ticket",
  {
    event: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author: {
      type: Sequelize.STRING,
      defaultValue: "harry potter",
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      defaultValue: "a great event with lots of spells",
      allowNull: false
    },
    picture: {
      type: Sequelize.BLOB,
      allowNull: true
    },
    price: {
      type: Sequelize.FLOAT,
      defaultValue: 5.0,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "tickets"
  }
);

module.exports = Ticket;

//Picture has:
// -price
// -description
// -author
// -picture (optional)
