const express = require('express');
const app = express();
const port = 3000;

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Internimes!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
