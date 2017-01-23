var defUrl = "http://192.168.1.141:8080/bash?comm=";

function urlchange()
{
  ip = document.getElementById('ip').value;
  defUrl = "http://"+ ip +":8080/bash?comm=";
}

function req()
{
    lol = document.getElementById('lolz').value;
    theUrl = defUrl + lol;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        console.log(xmlHttp.status);
        if (xmlHttp.readyState == 4) {
            // callback(xmlHttp.responseText);
            alert(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
    // $.get({
    //   url:theUrl,
    //   dataType: "jsonp",
    //   jsonpCallback: 'fnsuccesscallback',
    //   data:{},
    //   crossDomain: true,
    //   success:function(evt){
    //     console.log(evt);
    //   }
    // });
  //   $.ajax({
  //   url: theUrl,
  //   dataType: "text",
  //   crossDomain: true,
  //   beforeSend: function(request) {
  //     request.setRequestHeader("Access-Control-Allow-Origin", "*");
  //     // request.setRequestHeader("Access-Control-Request-Method", "GET");
  //     request.setRequestHeader("Access-Control-Expose-Headers","*");
  //   },
  //   success: function( response ) {
  //       console.log( response ); // server response
  //   }
  //
  // });
}
