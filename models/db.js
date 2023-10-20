const Sequelize = require("sequelize");
// Connection to the MySQL database
const sequelize = new Sequelize("postapp", "root", "06012004", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
