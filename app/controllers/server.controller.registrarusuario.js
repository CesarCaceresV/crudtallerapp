var mongoose = require('mongoose');
var modelo = require('../models/server.model.user');
module.exports = function(app){
    app.get('/contactlist', function(req, res){
        console.log("I recived a GET request", modelo);
        modelo.find(function (err, usuarios) {
            if (err) return console.error(err);
            console.log(usuarios);
            res.json(usuarios);
          })
    });
    app.post('/contactlist', function(req,res){
        var nuevousuario = new modelo({nombre: req.body.Nombre, apellido: req.body.Apellido, email: req.body.Email, 
        username: req.body.Username, password: req.body.Password, tipoUsuario: req.body.Usertype, provider: req.
        body.Provider});
        nuevousuario.save(function (err, nuevousuario) {
            if (err) return console.error(err);
          });
    });
}