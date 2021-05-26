//test 
// document.writeln('cya !!'); 



var nome = prompt("inserici il tuo nome");
//visualizzazione input in console
console.log(nome);


var cognome = prompt("inserici il tuo cognome");
//visualizzazione input in console
console.log(cognome);

var colore = prompt("colore preferito ? eh eh ? ")
//visualizzazione input in console
console.log(colore);

// var utente = nome + "." + cognome;
var psw = nome + cognome + colore + 21;
var lowerCasePSW = psw.toLowerCase();

document.getElementById("nome_utente").innerHTML="Nome utente : " +  nome + "." + cognome;
document.getElementById("psw").innerHTML="psw  : " + lowerCasePSW;


// concatenazione diretta in output
// document.getElementById("psw").innerHTML="psw  : " + nome + cognome + colore + 21;
