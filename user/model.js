const Sequelize = require("sequelize");
const db = require("../db");

// const Comment = require("../comments/model");
// const Ticket = require("../tickets/model");
// const Event = require("../event/model");

const User = db.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "users"
  }
);

module.exports = User;
