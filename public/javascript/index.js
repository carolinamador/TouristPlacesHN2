//index behavior

console.log("javascript loaded");

$("#btnEntrar").click(function(){
    var usuariosList = $("#usuariosList");
    // var u = $("#txtuser").val()
    $.ajax("apiUser/v0/obtenerUsuarios/$('#usuario').val()",
            {
                "method":"GET",
                "data":{},
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    var htmlstr = "";
                    htmlstr = '<p>'+jsonDoc.usuario.usuario+'</p> <p>'+jsonDoc.usuario.pass+'</p>'
                    $usuario = usuariosList.html(htmlstr).listview("refresh");

                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }
            }
        );
});




$("#btnRegistrase").click(function(){
$.ajax("apiUser/v0/agregarUsuario",
  {
    "method":"PUT",
    "data":{id_usuario: $("#txtidu").val(), usuario: $("#txtNombre").val(), correo: $("#txtCorreo").val(), pass: $("#txtPass").val(), confirm_pass: $("#txtPassConfir").val()},
    "dataType":"json",
    "success":function(jsonDoc,status,jqXHR){
        console.log(jsonDoc);
    },
    "error":function(jqXHR,status, errorMsg){
      console.log(errorMsg);
        }
      }
    );
}
