const express = require("express");
const app = express();

app.get("/ola/:cargo/:nome/:cor", function (req, res) {
  res.send(
    "<h1>Seu cargo é " +
      req.params.cargo +
      "</h1>" +
      "<h1>Seu nome é " +
      req.params.nome +
      "</h1>" +
      "<h1>Sua cor é " +
      req.params.cor +
      "</h1>"
  );
});

app.listen(8081, function () {
  console.log("Servidor rodado na url http://localhost:8081");
});
