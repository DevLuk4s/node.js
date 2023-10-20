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
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/card", function (req, res) {
  res.render("formulario.handlebars");
});

// Post
const Post = require("./models/Post");
app.post("/add", function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Houve um erro: " + erro);
    });
});

app.listen(8081, function () {
  console.log("Servidor rodando na URL http://localhost:8081");
});
