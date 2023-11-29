const express = require('express');
const app = express();
const path = require('path');
const {Usuario} = require('./models');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);

app.listen(80, ()=> {
    console.log(`Servidor rodando pelo endereço http://localhost/usuarios`);
})