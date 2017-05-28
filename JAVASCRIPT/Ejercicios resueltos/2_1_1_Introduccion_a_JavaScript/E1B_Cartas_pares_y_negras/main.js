/*
  Calcula el número de cartas, dentro de una baraja de poker, que sean, a la
  vez, pares y negras
*/

var totalCards = 55;
var jokers = 3;
var suits = 4;
var blackSuits = 3;
var cardsWithFigures = 3;
var pairFactor = 2;

var cardsPerSuit = (totalCards - jokers) / suits;
var numberedCards = cardsPerSuit - cardsWithFigures;
var evenCards = numberedCards / pairFactor;

var result = evenCards * blackSuits;

console.log('Una baraja de poker tiene ' + result + ' cartas que son, a la vez, pares y negras');
