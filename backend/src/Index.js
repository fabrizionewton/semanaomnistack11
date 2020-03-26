const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * npm install nodemon -D  instalar no modo dev o nodemon, que reinicia automatico o servidor node
 * 
 * no pakage.json editar "start": "nodemon src/index.js"
 * 
 * npm install knex intalar o manipulador do banco
 * npm install sqlite3  intalar o plugin do banco
 * npx knex init
 * 
 * npx knex migrate:make create_NOMEDATABLE
 * 
 * npx knex migrate:latest
 */