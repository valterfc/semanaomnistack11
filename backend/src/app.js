const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors()); // cors({ origin: 'http://meuapp.com' }) // para uso em produção
app.use(express.json()); // necessário para requisições com JSON
app.use(routes);
app.use(errors()); // para evitar erros do tipo "500" vindos da validação

// app.listen(3333); // removido daqui para não subir em test
module.exports = app;
