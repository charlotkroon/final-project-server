const Sequelize = require("sequelize");
const db = require("../db");

const Tickets = db.define("ticket", {
  name: Sequelize.STRING,
  location: {
    type: Sequelize.STRING,
    defaultValue: "everywhere",
    allowNull: false
  },
  date: Sequelize.INTEGER,
  price: Sequelize.INTEGER
});

module.exports = Family;
