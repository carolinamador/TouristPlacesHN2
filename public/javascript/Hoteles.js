/*** code gen by gk-position  ***/ ;
$(document).on("gkComponentsReady", function () {
  function onSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $("#gk-728FcbD").html("Latitude: " + latitude + "<br /> Longitude: " + longitude);
  }

  function onError(error) {
    // onError Callback receives a PositionError object
  }
  if (navigator.geolocation) {
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
      timeout: 10000
    });
  }
});
/*** code gen by gk-position  ***/
;
$(document).on("gkComponentsReady", function () {
  function onSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $("#gk-728ZTio").html("Latitude: " + latitude + "<br /> Longitude: " + longitude);
  }

  function onError(error) {
    // onError Callback receives a PositionError object
  }
  if (navigator.geolocation) {
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
      timeout: 10000
    });
  }
});*/

$(home).on("pagecreate",function(e){
  var ActList = $("#ActList");
  $.ajax("api/v0/ObtenerDestino",
        {
          "method":"GET",
          "data":{},
          "dataType":"json",
          "success":function(jsonDoc,status,jqXHR){
            console.log(jsonDoc);
            var htmlstr = "";
            for(var i=0; i < jsonDoc.destinos.length; i++){
              htmlstr += '<li><a>'+jsonDoc.desstinos[i].Destino+'</a><li>'
            }
            ActList.html(htmlstr).listview("refresh");
          },
          "error":function(jqXHR,status, errorMsg){
            console.log(errorMsg);
          }
        }
      );
});
