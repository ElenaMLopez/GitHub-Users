'use strict';

var getUserName = document.getElementById('user-get');
var searchButton = document.getElementById('searchButton');
var userName = document.getElementById('user-name');
var picture= document.getElementById('pic');
var repositories = document.getElementById('repositories-number');

function askForUser() {

  var request = new XMLHttpRequest(); // XML tipo de request, http protocolo

  request.open('GET', 'https://api.github.com/users/' + getUserName.value, true); // insertar variable usuario

  request.onload = function(){

    if (request.status >= 200 && request.status < 400) {
      var objetJsFromJason = JSON.parse(request.responseText);

      picture.style.display = "inline";

      userName.innerHTML = objetJsFromJason.name;
      picture.src = objetJsFromJason.avatar_url;
      repositories.innerHTML = objetJsFromJason.public_repos;
    }else {
      console.log('Eror 404, el archivo no se encuentra');
    }

  };
  request.onerror = function() {
    alert('Error al tratar de conectarse con el servidor');
  };

  request.send();

}
searchButton.addEventListener('click', askForUser);
