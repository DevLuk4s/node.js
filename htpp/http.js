var htpp = require("http");

htpp
  .createServer(function (req, res) {
    res.end("Ola");
  })
  .listen(8081);

console.log("O Servidor esta rodado");
