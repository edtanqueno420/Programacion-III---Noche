console.log("CICLOS O BUCLES");
console.log("WHILE");

let i=1;
while(i<=3){
    console.log("Contador:",i);
    i++;
}

let valores =[3,4,-2,4,5];
let indice = 0;
while(valores[indice]>0){
    console.log("Valor Valido: ", valores[indice]);
    indice++;
}

let n = 1;
while (n < 10) {
    if (n % 2 !== 0) {
        console.log(n, "es impar");
    }
    n++; 
}

let x=5;
do{
    console.log("iteracion", x);
    x++;
}while(x<5);

let contador = 1;
let suma = 0;

do {
    suma += contador;
    contador++;
} while (contador <= 5);

console.log("La suma es:", suma);


let reduccion=1;
do{
    console.log("reduccion",reduccion)
    reduccion--;
}while(reduccion>=0);

let numero = 6;
let cont = 1;

do {
    console.log(`${numero} x ${cont} = ${numero * cont}`);
    cont++;
} while (cont <= 12);

