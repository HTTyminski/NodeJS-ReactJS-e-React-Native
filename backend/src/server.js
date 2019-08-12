const express = require('express');
// importa bilioteca express
const mongoose = require('mongoose');

const cors = require('cors');


const routes = require('./routes');
// impotando a rota do servidor .para a mesma pasta
const server = express();
// chamando função express  abrir servidor
mongoose.connect('mongodb+srv://henrique:henrique@cluster0-0hc97.mongodb.net/bancodados?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
server.use(cors());
server.use(express.json());
// para o express reconhecer a utilização de json
server.use(routes);

server.listen(3333);

//mvc m - model v - view c - controller