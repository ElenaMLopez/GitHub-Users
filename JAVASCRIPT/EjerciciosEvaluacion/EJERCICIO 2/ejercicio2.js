// Vamos a crear una función JavaScript que toma un parámetro que es una cadena
// (texto). Si la cadena es de longitud impar, devuelve el carácter central.
// Si la longitud de la cadena es par, devuelve "Sólo funciono con cadenas"
// "de longitud impar"

var inputText = document.getElementById('text');
var answerText = document.getElementById('answer');
// console.log(inputText.value); // rula
// console.log(string.length);
var buttonCheck = document.getElementById('checkButton');
var buttonClear = document.getElementById('clearButton');


function check (){
  var string = inputText.value;
  var stringCheck = string.length;

  if (stringCheck%2 === 0) {
    // console.log('No rulo');
    answerText.innerHTML = 'Sólo fuciono con cadenas impares'
  } else {
    // console.log('ahora sí');
    var letter = Math.floor (stringCheck/2);
    answerText.innerHTML = string [letter];
  }
}

buttonCheck.addEventListener ('click', check);

function clear(){
  inputText.value = "";
}
buttonClear.addEventListener('click', clear);
