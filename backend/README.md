# Semana OmniStack 11.0 - RocketSeat
* Rota / Recurso

## instalar pacotes
```
yarn
```

## startar projeto
```
yarn start
```

## executar testes
```
yarn test
```

### Express
https://github.com/expressjs/express

### Validador para Express
https://github.com/arb/celebrate

### Auto restart do node
https://github.com/remy/nodemon

### Express Cors
https://github.com/expressjs/cors

### SQL Query Builder
https://github.com/knex/knex

### Banco de dados
https://github.com/mapbox/node-sqlite3

### Cross-Env
https://github.com/kentcdodds/cross-env

### Conexão REST do test
https://github.com/visionmedia/supertest

### Deploy Node
https://www.heroku.com/
https://www.digitalocean.com/

### Deploy Front / React
https://www.netlify.com/

#### Métodos HTTP:
* GET: buscar/listar uma informação do back-end
* POST: criar uma informação no back-end
* PUT: alterar uma informação no back-end
* DELETE: deletar uma informação no back-end

#### Tipos de Parâmetros:
* Query Params: parâmetros nomeados enviados na rota após "?" (filtros / paginação). Ex.: localhost/users?page=2&user=Diego
* Route Params: parâmetros utilizados para identificar recursos. Ex.: localhost/users/1 ( app.get('/users/:id' ... request.params )
* Request Body: corpo da requisição, utilizado para criar ou alterar recursos. (app.use(express.json()); ... const body = request.body;)

#### Tipos Bancos
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc

#### Tipos conexão Bancos
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
  * Knex.js
  * http://knexjs.org/

### Instalação
```
-- node via chocolatey
choco install nodejs-lts

node -v
npm -v

VSCode, extensões:
- tema dracula official
- material icon theme
```

### Backend
```
mkdir / cd
semanaomnistack11/backend

npm init -y
yarn init -y

code .

...

-- criando configuração do banco de dados
npx knex init

-- migrations - criando
npx knex migrate:make create_ongs
npx knex migrate:make create_incidents

-- migrations - executando develop
npx knex migrate:latest

-- migrations - rollback develop
npx knex migrate:rollback
npx knex migrate:rollback --all

-- migrations - status
npx knex migrate:status

...

-- inicializar testes
npx jest --init
```
