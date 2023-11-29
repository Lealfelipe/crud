const express = require('express');
const route = express.Router();
const userController = require('./src/controllers/userController');

route.get('/usuarios', userController.inicio);
route.post('/usuarios', userController.cadastraUsuario);
route.get('/usuarios/:id', userController.mostrarUsuarios);
route.patch('/usuarios/:id', userController.editaUsuario);
route.delete('/usuarios/:id', userController.excluirUsuario);

module.exports = route;