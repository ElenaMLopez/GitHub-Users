// Comprueba si una carta es el cuatro de corazones

var card = "4c";
// var card = "3c"; // Para probar si el código funciona con 3c
// var card = "13c"; // Para probar si el código funciona con 13c

var cardNumber = +card[0]; // El + convierte el número de "string" a "number"
var cardSuit = card[1];

if (cardNumber === 4 && cardSuit === "c") {
  console.log(card);
}
