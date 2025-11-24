console.log("VARIABLES EN LA CONCESIONARIA LIBERTADORES");


var saludo1 = "BIENVENIDO";
var saludo2 = "A LA CONCESIONARIA LIBERTADORES";
console.log(saludo1);
console.log(saludo1 + " " + saludo2);
console.log(`${saludo1} ${saludo2} - ¡Revisa nuestros autos!`);


let cantidadAutos = 50;
const tasaInteres = 12; 
console.log("Cantidad de autos disponibles:", cantidadAutos);
console.log("Tasa de interés:", tasaInteres + "%");


console.log("TIPOS DE DATOS EN LA CONCESIONARIA");

var clienteNombre = "Juan Pérez";
console.log("String (nombre del cliente):", typeof(clienteNombre));


var precioAuto = 25000;
console.log("Número (precio del auto):", typeof(precioAuto));


var enStock = true;
console.log("Booleano (auto disponible):", typeof(enStock));


var colorAuto;
console.log("Indefinido (color del auto):", typeof(colorAuto));

var autoSeleccionado = null;
console.log("Nulo (auto seleccionado):", typeof(autoSeleccionado));

var idAuto = Symbol("autoID");
console.log("Símbolo (ID único del auto):", typeof(idAuto));

var totalVentas = 123456789012345n;
console.log("BigInt (total de ventas):", typeof(totalVentas));

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2024,
    precio: 22000
};
console.log("Objeto auto:", typeof(auto));
console.log(auto);
console.log("Marca:", auto.marca);
console.log("Modelo:", auto.modelo);
console.log("Precio:", auto.precio);
