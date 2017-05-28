/*
  1. Define una variable cuyo valor sea una cadena que represente una carta de la
  baraja, cuyo valor sea mayor que 9.

  2. Ahora utiliza el operador para indexar la cadena, y accede al palo de la carta.

  3. ¿Cuál es la diferencia si la carta tiene un valor menor o igual que 9?
*/

// Paso 1
var card = "10c";

// Paso 2
var suit = card[2];
console.log('El palo de ' + card + ' es ' + suit);

// Paso 3
var card2 = "8p";
var suit2 = card2[1];
console.log('El palo de ' + card2 + ' es ' + suit2);

/*
  La diferencia es que en las cartas con un número mayor que 9, obtenemos el
  palo cogiendo el valor que está en el tercer indice (card[2]) mientras que en
  las cartas que
*/
