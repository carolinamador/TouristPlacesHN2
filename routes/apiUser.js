var express = require('express');
var apiUserrouter = express.Router();

function apiUser(db){
  //collections
  var Users = db.collection("usuario");


  //rutas
    apiUserrouter.get("/ObtenerUsuarios",
      function(req, res){
        var query= {};
        Users.find(query).toArray(function(err, vUsers){
          if(err){
            res.status(500).json({"error":err});
          }else{
            res.status(200).json({"usuario":vUsers});
          }
        }) // Users.find toArray

          //status(200)--->peticion atendida corectatamente
          //status(300)--->peticion atendida pero se extrae cache
          //status(400)--->no se encuentra servicio solicitado
          //status(500)--->error en server
      }
  )// ObtenerDestino

  apiUserrouter.get("/ObtenerUsuarios/:_id",
    function(req, res){
      var query ={"_id": req.params._id};
      Users.findOne(query, function(err, doc){
        if(err){
          res.status(500).json({"error":err});
        }else{
          res.status(200).json({"usuario":doc});
        }
      });

    }
  )//ObtenerDestino


  apiUserrouter.post("/ModificarUsuario/:_id",
    function(req, res){
      var query = {"_id": req.params._id};
      var upd = {"$set":{"usuario":req.body.usuario}};
      console.log(query);
      console.log(upd);

      Users.updateOne(query,upd,{w:1},function(err, doc){
        if(err){
          res.status(500).json({"error":err});
        }else{
          res.status(500).json({"usuario":doc});
        }
      });

    }
  )//ModificarUser

 apiUserrouter.put("/agregarUsuario",
    function(req, res){
      console.log(req.body);
      var newUser = {};
      newUser._id = req.body._id;
      newUser.usuario = req.body.usuario;
      Users.insertOne(newUser, function(err, doc){
        if(err){
          res.status(500).json({"error":err});
        }else{
          res.status(200).json({"usuario":doc});
        }
      });

    }
  )//agregarDestino

  apiUserrouter.delete("/EliminarUsuario/:_id",
    function(req, res){
      var query = {"_id": req.params._id};
      Users.deleteOne(query,{w:1},function(err, doc){
        if(err){
          res.status(500).json({"error":err});
        }else{
          res.status(500).json({"usuario":doc});
        }
      });

    }
  )//EliminarUser

  return apiUserrouter;

}

module.exports = apiUser;
