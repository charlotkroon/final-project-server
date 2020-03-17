const Sequelize = require("sequelize");

const databaseUrl = "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync({ force: false }) // true will delete everything. false is the default.
  .then(() => console.log("Database connect"));

module.exports = db;
