  // Desarrolla una librería Croupier que tenga una función para
  // barajar cartas. Para barajar, intercambiamos una carta aleatoria
  // dentro de nuestra baraja por otra. Y esto lo hacemos 100 veces.
  // Se recomienda usar la librería Math.random. Por ejemplo, intercambiar
  // la carta en la posición 7 por la carta en la posición 24
  //
  // 1. crear la librería croupier, que es un objeto, es decir array de diccionarios
  // 2. crear la funcion barajar, que cambia un índice del array por otro.
  // 3. el indice q se cambia por otro es aleatorio, y se hace con Math.random

  var palo = ["C","D","T","P"];
  var numero = [1,2,3,4,5,6,7,8,9,10,11,12];
  var baraja = [];
  for (var i = 0; i < palo.length; i++) {
    for (var j = 0; j < numero.length; j++) {
      var carta = {palo: palo[i], numero: numero[j]};

      baraja[baraja.length] = carta; // poner posición de baraja porque si no no la rellena... aiiiiiinnngg q se te va---
      console.log(baraja);
    }
  }
console.log(carta);
