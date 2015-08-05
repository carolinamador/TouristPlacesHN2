var express = require('express');
var apiUserrouter = express.Router();

function apiUser(db){
  //collections
  var Users = db.collection("usuario");

  //rutas
  apiUserrouter.post("/ObtenerUsuarios",
    function(req, res){
      //var query= {};
      //console.log(req.body.User);
      Users.findOne({$and:[{"usuario": req.body.User},{"pass":req.body.Pass}]}, function(err, doc){
        if(doc==null){
          res.redirect("/Home");
        }else{
          res.redirect("/Prin");
        }
      });

    }
)// ObtenerUsuario



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
             newUser.id_usuario = req.body.txtidu;
             newUser.usuario = req.body.txtNombre;
             newUser.correo = req.body.txtCorreo;
             newUser.pass = req.body.txtPass;
             newUser.confirm_pass = req.body.txtPassConfir;
             Users.insertOne(newUser, function(err, doc){
                 if(err){
                     res.status(500).json({"error":err});
                 }else{
                     res.status(200).json({"usuario":doc});
                 }
             });
         }
     ) // agregarLibro

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
