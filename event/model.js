const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define("event", {
  name: {
    type: Sequelize.STRING
    // allowNull: false
  },
  description: {
    type: Sequelize.STRING
    // defaultValue: "a great event with lots of spells",
    // allowNull: false
  },
  picture: {
    type: Sequelize.BLOB
    // allowNull: true
  },
  startDate: {
    type: Sequelize.DATE
  },
  endDate: {
    type: Sequelize.DATEONLY
  }
});

module.exports = Event;
