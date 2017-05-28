// 1. Desarrolla una función que puntúe una mano de cartas,
// que tenga como parámetro un array de cartas, cada una representada
// por un diccionario con palo y valor. Al puntuar, las cartas suman
// su valor excepto si es un as que suma 20.
// Prueba a invocarla con varias manos de cartas con y sin ases.




var mano = [
  {palo:"c" , numero: 1},
  {palo:"d" , numero: 5},
  {palo:"t" , numero: 7},
  {palo:"p" , numero: 4},
  {palo:"t" , numero: 2},
  {palo:"c" , numero: 1},
  {palo:"d" , numero: 10}
]
function puntuaMano(){
  var puntuacionTotal=0;
  for (var i = 0; i < mano.length; i++) {

    if (mano[i].numero === 1) {
      mano[i].numero = 20;
    }
    puntuacionTotal = puntuacionTotal + mano[i].numero;

  }
  return puntuacionTotal;
}
puntuaMano();
console.log(puntuaMano());
