var express = require('express');
var apirouter = express.Router();

function api(db){
  //collections
  var Dest = db.collection("destino");


  //rutas
    apirouter.get("/ObtenerDestino",
      function(req, res){
        var query= {};
        Dest.find(query).toArray(function(err, vDest){
          if(err){
            res.status(500).json({"error":err});
          }else{
            res.status(200).json({"destinos":vDest});
          }
        }) // Users.find toArray

          //status(200)--->peticion atendida corectatamente
          //status(300)--->peticion atendida pero se extrae cache
          //status(400)--->no se encuentra servicio solicitado
          //status(500)--->error en server
      }
  )// ObtenerDestino

  apirouter.get("/ObtenerDestino/:_id",
    function(req, res){
      var query ={"_id": req.params._id};
      Dest.findOne(query, function(err, doc){
        if(err){
          res.status(500).json({"error":err});
        }else{
          res.status(200).json({"destinos":doc});
        }
      });

    }
  )//ObtenerDestino


  apirouter.post("/ModificarDestino/:_id",
    function(req, res){
      var query = {"_id": req.params._id};
      var upd = {"$set":{"destinos":req.body.Destino}};
      console.log(query);
      console.log(upd);

      Dest.updateOne(query,upd,{w:1},function(err, doc){
        if(err){
          res.status(500).json({"error":err});
        }else{
          res.status(500).json({"destinos":doc});
        }
      });

    }
  )//ModificarUser

 apirouter.put("/agregarDestino",
    function(req, res){
      console.log(req.body);
      var newDestino = {};
      newDestino._id = req.body._id;
      newDestino.Destino = req.body.Destino;
      Dest.insertOne(newDestino, function(err, doc){
        if(err){
          res.status(500).json({"error":err});
        }else{
          res.status(200).json({"Destino":doc});
        }
      });

    }
  )//agregarDestino

  apirouter.delete("/EliminarDestino/:_id",
    function(req, res){
      var query = {"_id": req.params._id};
      Dest.deleteOne(query,{w:1},function(err, doc){
        if(err){
          res.status(500).json({"error":err});
        }else{
          res.status(500).json({"destinos":doc});
        }
      });

    }
  )//EliminarUser

  return apirouter;

}

module.exports = api;
