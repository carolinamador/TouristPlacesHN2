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


function todoLleno(){
$("#btnRegistrarse").click(function(){

    $.ajax("apiUser/v0/agregarUsuario",
            {
                "method":"PUT",
                "data":{usuario: $("#txtNombre").val(), correo: $("#txtCorreo").val(), pass: $("#txtpass").val(), confirm_pass: $("#txtPassConfir").val()},
                // $( "#hd" ).val( ui.item.emp_id );
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    var htmlstr = "";
                    htmlstr = '<p>'+jsonDoc.usuario.usuario+'</p> <p>'+jsonDoc.usuario.nombre+'</p>'+'<p>'+jsonDoc.usuario.pass+'</p> <p>'+jsonDoc.usuario.confirm_pass+'</p>''<p>'+jsonDoc.usuario.correo+'</p>'
                    $usuario = usuariosList.html(htmlstr).listview("refresh");

                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }

            }
        );
// });
}
