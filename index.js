const express = require("express");
const app = express();

// Configuration
// Template Engine
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/card", function (req, res) {
  res.render("formulario.handlebars");
});

app.post("/add", function (req, res) {
  res.send("Texto: " + req.body.titulo + "Conteudo: " + req.body.conteudo);
});

app.listen(8081, function () {
  console.log("Servidor rodando na URL http://localhost:8081");
});
