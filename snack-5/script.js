var numero = [ ]
for (var i = 0; i < 6 ; i++) {
    var numeroDS = parseInt(prompt( "inserisci un numero dispari:"));
    if (IsNotUneven(numeroDS) == false){
    numero.push(numeroDS);
}
else
{
    alert("Numero non accettato, è pari!");
}

}