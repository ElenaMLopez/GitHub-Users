// Ejercicio 1
// Creamos una función que tomará como parámetros un número y un array de números.
//  La función va a devolver el número de veces que está repetido ese número
//  en el array. Por ejemplo, si le pasamos un 1 y [1,3,4,2,1,3,4,5],
//   la función devolverá un 2, porque el número 1 aparece dos veces en el array.
//

// 1. Función que tiene de parametros un número y un array
// 2. la función dice cuantas veces se repite un número
// 3. en el array el numero n es el que hay que buscar en el array
// 4. acumular los que se repiten en el array en una variable o lista
// 5. devolver el número de veces q se repite el número dado.(longitud de la lista)
//DATOS:
// Un número
// Una lista de números
// para cada número de la lista ver si es el número dado
// si es el número dado almacenarlo en otra lista
// decir la longitud de la lista


var number = "7";
var numberList =["3","7","8","9","5","7","2","7"];
var howNunmbers = numberList.length;  // declarada tan solo para el enunciado final.
var repeatNumber = [];
var resul = 0;

function countRepeatNumber (number, numberList){
      for (var i = 0; i < numberList.length; i++) {
        if (numberList[i] === number) {
          repeatNumber = repeatNumber + numberList[i]; // Da un array q empieza por 0.

        }

      }

    return repeatNumber;
}
countRepeatNumber(number,numberList);
console.log("La lista tiene "+howNunmbers+" números y el número repetido es el "+number+". Se repite "+ repeatNumber.length + " veces.");
window.alert("La lista tiene "+howNunmbers+" números y el número repetido es el "+number+". Se repite "+ repeatNumber.length + " veces.")





//prueba
// var number = 1;
// var arrayNumbers = [1,3,4,2,1,3,4,5];
// var total = 0;
// function numberCount (number, arrayNumbers) {
//   for ( i = 0; i<arrayNumbers.length; i++); {
//     if (arrayNumbers[i] === number) {
//       total == total + 1
//     }
//   }
//   return total;
// }
























//
//
// var number = 3;
// var arrayNumbers = [12,3,5,3,9,4,7,56,42,99];
// var howNunmbers = arrayNumbers.length;//declarada tan solo para el enunciado final.
//
// function giveNumber(number, arrayNumbers){
//
//   for (var i = 0; i < arrayNumbers.length; i++) {
//
//     if (arrayNumbers[i] === number) {
//       console.log("lelga");
//
//       var repeatNumber= [arrayNumbers[i]]; //almacena los repetidos.
//         if (repeatNumber.length>1) {
//           return repeatNumber.length;
//           console.log("La lista de números tiene "+howNunmbers+" números, y el número que se repite es el " + number );
//         }
//
//     }else {
//       console.log("No hay ningún número repetido");
//     }
//   }
// }
// var result = giveNumber(number, arrayNumbers);
// console.log(result);
