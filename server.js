//============ imports
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

//var db = mongojs('contactlist',['contactlist']);
//============ /imports

// ================ mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactlist');
var db = mongoose.connection;

//============= /mongoose

var ModuloRegistrarUsuario = require('./app/controllers/server.controller.registrarusuario');
//=========== archivos estaticos
app.use(express.static(__dirname + "/public"));
//=========== /archivos estaticos

//=========== para post.body
app.use(bodyParser.json());
//=========== /para post.boddy

//=========== para ejecutar
app.listen(3000);
console.log("server runing on port 3000");
//=========== /para ejecutar

//=========== iniciar base de datos
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongoose conected");
    ModuloRegistrarUsuario(app);
});
//=========== /iniciar base de datos
