console.log("CICLOS EN LA CONCESIONARIA LIBERTADORES");
console.log("WHILE");

let i = 1;
while(i <= 3){
    console.log("Auto revisado número:", i);
    i++;
}

let preciosAutos = [20000, 15000, -1, 25000, 18000];
let indice = 0;
while(preciosAutos[indice] > 0){
    console.log("Precio válido del auto:", preciosAutos[indice]);
    indice++;
}

let n = 1;
while (n < 10) {
    if (n % 2 !== 0) {
        console.log("Auto impar en inventario:", n);
    }
    n++;
}

let x = 5;
do{
    console.log("Iteración de revisión:", x);
    x++;
} while(x < 5);

let contador = 1;
let sumaPrecios = 0;
do {
    sumaPrecios += contador * 1000;
    contador++;
} while (contador <= 5);
console.log("Suma estimada de precios:", sumaPrecios);

let reduccion = 1;
do{
    console.log("Reducción de stock:", reduccion);
    reduccion--;
} while(reduccion >= 0);

let numeroAuto = 6;
let cont = 1;
do {
    console.log(`Precio calculado auto ${numeroAuto} x ${cont} cuotas = ${numeroAuto * cont * 1000}`);
    cont++;
} while(cont <= 12);
