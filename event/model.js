const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define(
  "event",
  {
    name: {
      type: Sequelize.STRING,
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
    startdate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    enddate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "event"
  }
);

module.exports = Event;
