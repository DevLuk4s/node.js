const express = require("express");
const app = express();

// Configuration
// Template Engine
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connection to the MySQL database
const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

// Routes
app.get("/card", function (req, res) {
  res.render("formulario.handlebars");
});

app.listen(8081, function () {
  console.log("Servidor rodando na URL http://localhost:8081");
});
