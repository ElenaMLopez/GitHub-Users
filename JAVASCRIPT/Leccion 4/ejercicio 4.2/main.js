// 2. Partiendo de la función anterior,
// modíficala para que además las cartas rojas
// sumen el doble. Prueba a invocarla con varias manos de cartas.

//FUNCIÓN ANTETIOR
var mano = [
  {palo:"c" , numero: 1},
  {palo:"d" , numero: 5},
  {palo:"t" , numero: 7},
  {palo:"p" , numero: 4},
  {palo:"d" , numero: 2},
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
    if (mano[i].palo  === "c" || mano[i].palo === "d") { // si el palo es rojo (corazones o diamantes)
      mano[i].numero = mano[i].numero * 2;                // duplica el número de cada diccionario del array mano[]
    }
  }
  return puntuacionTotal;
}
puntuaMano();
console.log(puntuaMano());
