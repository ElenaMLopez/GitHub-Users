/*
  1. Define una variable cuyo valor sea una cadena que represente una carta de la
  baraja.

  Recuerda que representamos las cartas con una cadena formada por un
  número que representa el valor, seguido de una letra que representa el palo.

  2. Ahora crea otras dos variables que representan a la carta anterior y a las
  carta posterior en una baraja ordenada.

  Finalmente, crea una última variable que concatene las cadenas de las 3 cartas
  anteriores usando las variables que ya tienes.
*/

// Paso 1
var card = "4c";

// Paso 2
var cardNumber = card[0];
var cardSuit = card[1];

var previousCardNumber = cardNumber - 1;
var previousCard = previousCardNumber + cardSuit;

/*
  El símbolo de + es necesario para convertir texto a número y poder sumar ambos
  en vez de concatenarlos. Es decir, obtener 5 en vez de "41";
*/
var nextCardNumber = +cardNumber + 1;
var nextCard = nextCardNumber + cardSuit;

// Paso 3
var result = previousCard + card + nextCard;

console.log('El resultado de concatenar ' + card + ' con su carta anterior y la siguiente es: ' + result);
