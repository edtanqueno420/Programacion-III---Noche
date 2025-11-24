console.log("OPERADORES EN LA CONCESIONARIA LIBERTADORES");

console.log("Operadores Aritméticos");


const precioAuto = 20000;
const cantidadAutos = 3;

const totalCompra = precioAuto * cantidadAutos;
console.log(`${precioAuto} x ${cantidadAutos} = ${totalCompra} (Total por los autos)`);

const descuento = 1500;
const totalConDescuento = totalCompra - descuento;
console.log(`${totalCompra} - ${descuento} = ${totalConDescuento} (Total con descuento)`);

const precioConIVA = totalConDescuento * 1.12; // IVA 12%
console.log(`${totalConDescuento} * 1.12 = ${precioConIVA} (Precio con IVA)`);

const promedioPrecio = precioConIVA / cantidadAutos;
console.log(`${precioConIVA} / ${cantidadAutos} = ${promedioPrecio} (Precio promedio por auto)`);

console.log("Operadores de Comparación");

const ingresoCliente = 25000;
const precioFinanciado = 22000;

console.log(`Ingreso suficiente: ${ingresoCliente} >= ${precioFinanciado} → ${ingresoCliente >= precioFinanciado}`);
console.log(`Ingreso insuficiente: ${ingresoCliente} < ${precioFinanciado} → ${ingresoCliente < precioFinanciado}`);

const cuotas = "12";
const cuotasNumero = 12;
console.log(`Igual Débil: ${cuotas} == ${cuotasNumero} → ${cuotas == cuotasNumero}`);
console.log(`Igual Estricta: ${cuotas} === ${cuotasNumero} → ${cuotas === cuotasNumero}`);

console.log("Operadores Lógicos");


const tieneHistorial = true;
const ingresoSuficiente = ingresoCliente >= precioFinanciado;

console.log(`Puede financiar (AND): ${tieneHistorial} && ${ingresoSuficiente} → ${tieneHistorial && ingresoSuficiente}`);
console.log(`Puede revisar promo (OR): ${tieneHistorial} || ${ingresoSuficiente} → ${tieneHistorial || ingresoSuficiente}`);
console.log(`No puede financiar (NOT): !(${tieneHistorial && ingresoSuficiente}) → ${!(tieneHistorial && ingresoSuficiente)}`);


console.log(`Condición combinada: ${(tieneHistorial && ingresoSuficiente) || !tieneHistorial}`);
