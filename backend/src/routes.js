const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);


routes.get('/profile', ProfileController.index);


routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;


/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 *
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametro nomeados na rota após "?" (Filtros, paginação) Ex: http://localhost:3333/users?name=Fabrizio Request: request.query;
  * Route Params: Parametros utilizados para identificar recursos Ex: http://localhost:3333/users/:id Request: request.query;
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos Ex:{"name" : "Fabrizio Newton","idade" : 25} Request: request.body;
  */