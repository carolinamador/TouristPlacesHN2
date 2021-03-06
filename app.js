var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

function returnApp(db){
  var app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));


  //para llamar a los modulos se usa la funcion require
  //la uri del modulo y debe especificarse
  //en el modulo la exportacion con
  //module.exports = <<function>>
  var api = require("./routes/api.js")(db);
  var apiUser = require("./routes/apiUser.js")(db);

  app.use('/apiUser/v0', apiUser);
  app.use('/api/v0', api);
  // http://localhost:3000/api/v0/ObtenerUser

  //app.use('/', routes);
  app.get("/Home", function(req, res){
      res.render("HomePage",{});
  });

  app.get("/Ama", function(req, res){
      res.render("destino",{});
  });

  app.get("/Act", function(req, res){
      res.render("Actividades",{});
  });

  app.get("/Hot", function(req, res){
      res.render("Hoteles",{});
  });

  app.post("/login", function(req, res){
      res.redirect("/Prin");
  });

  app.get("/Prin", function(req, res){
    res.render("principal");
  });

  app.get("/Rest", function(req, res){
      res.render("Restaurantes",{});
  });

  app.get("/Re", function(req, res){
      res.render("Restaurante",{});
  });

  app.get("/Ho", function(req, res){
      res.render("Hotel",{});
  });
  app.get("/Ac", function(req, res){
      res.render("Actividad",{});
  });

  /*app.get("/:ruta", function(req,res){
    var ruta = req.params.ruta;
    res.sendFile(path.join(__dirname, 'public/'+ruta+'/Activ'+ruta+'.HTML'));
  });*/

  app.use('/users', users);





  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

return app;
} // return app

module.exports = returnApp;
