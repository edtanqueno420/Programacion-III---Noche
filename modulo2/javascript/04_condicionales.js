console.log("COndicionales");
console.log("CONDICIONAL IF");
let temperatura=45;
if(temperatura>30){
    console.log("Hace calor");
}
console.log("Condicional ");

console.log("CONDICIONALIF ELSE");
const password="password123";
if(password ==="password123"){
    console.log("Ususario logueado")
}else{
    console.log("Usuario no autorizado")
}

console.log("condicional anidados");
const edad=19;
const tieneLicencia=true;
if(edad>18){
    if(tieneLicencia==true){
        console.log("puede conducir");
    }else{
        console.log("nesecita licencia");
    }
}else{
    console.log("Es menor de edad");
}

console.log("Condicional switch");
const dia = "lunes";
switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("dia laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("fin de semana");
        break;
    default:
        console.log("dia no valido");
}