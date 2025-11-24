console.log("CONDICIONALES EN LA CONCESIONARIA LIBERTADORES");


let temperatura = 45; 
if (temperatura > 30) {
    console.log("Hace mucho calor en la concesionaria, activa aire acondicionado");
}


const password = "password123"; 
if (password === "password123") {
    console.log("Usuario logueado en el sistema de la concesionaria");
} else {
    console.log("Usuario no autorizado");
}


const edadCliente = 19;
const tieneLicencia = true;

if (edadCliente >= 18) {
    if (tieneLicencia) {
        console.log("El cliente puede realizar la prueba de manejo");
    } else {
        console.log("El cliente necesita una licencia para conducir");
    }
} else {
    console.log("El cliente es menor de edad, no puede conducir");
}


const dia = "lunes";

switch(dia.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log("Día laboral: atención normal en la concesionaria");
        break;
    case "sábado":
    case "domingo":
        console.log("Fin de semana: promociones especiales en autos");
        break;
    default:
        console.log("Día no válido");
}
