var palos=['d','p','t','c'];
var cartasPorPalo=12;
var baraja= [];
for (var i = 0; i < palos.length; i++) {
  for (var j = 1; j < cartasPorPalo.length; j++) {
    var palo= palos[i];

    var carta= {
      valor:j,
      palo: palo[i]
    }
  ;
    listaCartas[cartas.length]=[carta];
  }
}
console.log(baraja);

var cartaNegra=[];
var cartaRoja=[];

for (var i = 0; i < baraja.length; i++) {
var carta=baraja[i];
if (carta.palo==="c"||carta.palo==="d") {
cartaNegra[cartaNegra.length]= carta;
}else {
cartaRoja[cartaRoja.length]=carta;
}
}
console.log(baraja.short);
