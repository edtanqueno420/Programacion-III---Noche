console.log("CICLOS EN LA CONCESIONARIA LIBERTADORES");
console.log("FOR OF");

const autos = ["Toyota", "Honda", "Mazda", "Ford", "Chevrolet"];
for (const auto of autos){
    console.log("Auto disponible:", auto);
}

const concesionaria = "Libertadores";
for (const letra of concesionaria) {
    console.log("Letra:", letra);
}

const precios = [20000, 15000, 30000, 25000, 18000];
let maxPrecio = 0;
for (const precio of precios){
    if(precio > maxPrecio) maxPrecio = precio;
}
console.log("El auto más caro cuesta:", maxPrecio);

const autoDetalle = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2024
}

let contadorClaves = 0;
for (const clave in autoDetalle) {
    contadorClaves++;
}
console.log("El objeto autoDetalle tiene", contadorClaves, "claves");
