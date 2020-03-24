const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // cors({ origin: 'http://meuapp.com' }) // para uso em produção
app.use(express.json()); // necessário para requisições com JSON
app.use(routes);

app.listen(3333);
