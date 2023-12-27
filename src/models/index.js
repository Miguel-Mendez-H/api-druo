const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];
const UserModel = require("./user");
const BusinessModel = require("./business");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: "postgres",
  }
);

//verifico la conexion

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const User = UserModel(sequelize, Sequelize);
const Business = BusinessModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  sequelize,
  User,
  Business,
};
