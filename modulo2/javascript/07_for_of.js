console.log("CICLOS O BUCLES");
console.log("FOR OF");
const nombres=["Villamil", "Gabriel","Alzugaray","Ramirez","Dominguez"];
for (const nombre of nombres){
    console.log("Hola",nombre);
}


const nombre = "Villamil";
for (const letra of nombre) {
    console.log("Letra:", letra);
}


const numero=[1,2,3,4,5,6];
num=0;
for (const i of numero){
    if(i>num) num=i;
}
console.log("El mayor es",num);



const persona={
    nombre:"Gabriel",
    apellido:"Villamil",
    profesion:"Futbolista"
}

let contador = 0;
for (const clave in persona) {
    contador++;
}
console.log("El objeto tiene", contador, "claves");
