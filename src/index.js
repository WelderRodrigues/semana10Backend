const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://welder:welder@cluster0-bvx8q.mongodb.net/semana10?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);


/*
METODOS HTTP: GET, POST, PUT, DELETE

PARAMETROS:

QUERY PARAMS: request.query ( Filtros, ordenação, paginação)
ROUTE PARAMS: request.params ( Identificar um recurso na alteração ou remoção)
BODY: request.body ( Dados para criação ou alteração de um registro)

*/
server.listen(3333); 