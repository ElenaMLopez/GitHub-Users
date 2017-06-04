'use strict';

var getUserName = document.getElementById('user-get');
var search = document.getElementById('searchButton');
var userName = document.getElementById('user-name');
// falta foto
var repositories = document.getElementById('repositories-number');
// creación de variable para obtener la respuesta

var request = new XMLHttpRequest(); // XML tipo de request, http protocolo


request.open('GET', 'https://api.github.com/users/guerrero', true); // insertar variable usuario

// Crear un if para abarcar las posibles ocurrencias:
if (request.status >= 200 && request.status < 400) {
  var objetJsFromJason = JSON.parse(request.responseText); //pasa la info JSON a
  //js y lo guarda como valor de la propiedad responseText
  // FALTAN poner la insercion en HTMl antes visualizar el JSON
  console.log(request.responseText);
}else {
  console.log('Eror 404, el archivo no se encuentra');
}

request.onerror = function() {
  console.log('Error al tratar de conectarse con el servidor');
};
// Una vez determinadas todas las opciones, hacemos la petición
request.send();
console.log(request.responseText);
