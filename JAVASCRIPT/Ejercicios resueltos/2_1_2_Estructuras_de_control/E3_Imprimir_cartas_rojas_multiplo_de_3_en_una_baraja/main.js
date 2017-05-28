// Imprime las cartas rojas múltiplo de 3 que hay dentro de una baraja de poker

/*
  .length nos sirve para saber la longitud de un string. Por ejemplo, si tenemos
  var saludo = "Hola"; y escribimos console.log(hola.length), en la consola se
  imprimirá 4, que es la longitud del string "Hola".
*/

var suits = "ctpr";
var totalCards = 52;
var cardsPerSuit = totalCards / suits.length;

for (var i = 0; i < suits.length; i = i + 1) {
  for (var j = 1; j <= cardsPerSuit; j = j + 1) {
    var cardNumber = j;
    var cardSuit = suits[i];
    var isMultipleOfThree = cardNumber % 3 === 0;
    var isRed = cardSuit === "c" || cardSuit === "r";

    if (isMultipleOfThree && isRed) {
      console.log(cardNumber + cardSuit);
    }
  }
}
