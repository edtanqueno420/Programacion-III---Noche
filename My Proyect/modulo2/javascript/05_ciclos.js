console.log("CICLOS EN LA CONCESIONARIA LIBERTADORES");

for(let i=1; i<=5; i++){
    console.log("Auto número:", i);
}

let totalPrecio = 0;
const precios = [20000, 15000, 30000, 25000, 18000];
for(let i=0; i<precios.length; i++){
    totalPrecio += precios[i];
}
console.log("Precio total de los autos:", totalPrecio);

let nombreConcesionaria = "Libertadores";
for(let i=0; i<nombreConcesionaria.length; i++){
    console.log(nombreConcesionaria[i]);
}

for(let i=1; i<=5; i++){
    console.log(`Precio estimado con impuesto del auto ${i}: ${precios[i-1]*1.12}`);
}
