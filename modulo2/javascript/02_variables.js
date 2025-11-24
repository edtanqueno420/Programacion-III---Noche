console.log("VARIABLES")
var saludo1="HOLA";
var saludo2="HOLA DESDE UNA VARIABLE"
console.log(saludo1);

console.log(saludo1+" "+saludo2);
console.log(`${saludo1} ${saludo2} ${4+5}`);
let numero = 24;
const angulo = 45;
console.log(numero,angulo);

console.log("TIPOS DE DATOS");
var nombre="Cypress Hill";
console.log("String", typeof(nombre));

var tiponumero=4444;
console.log("Tipo numerico", typeof(tiponumero));

var tipobooleano=true;
console.log("Tipo Booleano", typeof(tipobooleano));

var tipoIndefinido=undefined;
console.log("Tipo Indefinido", typeof(tipoIndefinido));

var tipoNula=null;
console.log("Tipo Nula", typeof(tipoNula));

var tipoSimbolo=Symbol("clave");
console.log("Tipo Simbolo", typeof(tipoSimbolo));

var tipoBigentero=432424n;
console.log("Tipo Big Entero", typeof(tipoBigentero));

const persona={
    nombre: "Tyrone",
    edad: 30
}
console.log("tipo objeto", typeof(persona));
console.log(persona);
console.log(persona.edad);
console.log(persona.nombre);