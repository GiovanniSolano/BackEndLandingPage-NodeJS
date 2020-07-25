require('./server/config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors')

const { dbConexion } = require('./server/database/config');

dbConexion();

app.use(cors());



var rutasUsuario = require('./server/Routes/usuario');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/usuario', rutasUsuario);







app.listen(process.env.PORT, () => {
    console.log('Servidor en el puerto 3000');

});