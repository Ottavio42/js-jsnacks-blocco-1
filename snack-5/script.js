var numeroDS = [];
var numeroPR = [];
for ( var i = 0; i < 6 ; i++ ) {
    var numero = parseInt(prompt( "inserisci un numero dispari:"));
    if ( numero % 2 == 1 ) {
    numeroDS.push(numero);
}
    else {
        numeroPR.push(numero);
    }
}
console.log(numeroDS);
console.log(numeroPR);