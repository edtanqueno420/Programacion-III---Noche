console.log("FUNCIONES EN LA CONCESIONARIA LIBERTADORES");

console.log("FUNCIONES SIMPLES");
function bienvenida(){
    console.log("BIENVENIDO A LA CONCESIONARIA LIBERTADORES")
}
bienvenida();

console.log("FUNCION CON PARAMETROS");
function calcularTotal(precio, cantidad){
    return precio * cantidad;
}
console.log("Total de la compra:", calcularTotal(20000, 3));

console.log("FUNCION FLECHA");
const saludoFlecha = () => {
    console.log("Revisando autos desde una función flecha")
}
saludoFlecha();

const calcularDescuento = (precio, descuento) => {
    return precio - descuento;
}
console.log("Precio con descuento:", calcularDescuento(25000, 3000));

console.log("FUNCION RETORNO DIRECTO");
const precioConIVA = precio => precio * 1.12;
console.log("Precio con IVA:", precioConIVA(20000));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function dividirPago(total, cuotas = 12){
    return total / cuotas;
}
console.log("Pago por cuota:", dividirPago(24000, 8));
console.log("Pago por cuota por defecto:", dividirPago(24000));
