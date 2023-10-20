const db = require("./db");

const Post = db.sequelize.define("postagens", {
  titulo: {
    type: db.Sequelize.STRING,
  },
  conteudo: {
    type: db.Sequelize.TEXT,
  },
});

// Sincronize o modelo com o banco de dados
Post.sync({ force: true })
  .then(() => {
    console.log("Tabela Postagens criada com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao criar a tabela Postagens:", err);
  });
