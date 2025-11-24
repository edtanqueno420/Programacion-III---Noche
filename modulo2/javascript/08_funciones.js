console.log("FUNCIONES");
console.log("FUNCIONES SIMPLES");
function saludar(){
    console.log("SE NOS VIENE LA SEGUNDA LIBERTADORES AGUANTE LA U ")
}
saludar();

console.log("FUNCION CON PARAMETROS");
function suma(a, b){
    return a+b;
}
console.log("Resultado de la suma:",suma(5,8));

console.log("FUNCION FLECHA");
const funcionFlecha=()=>{
    console.log("Saludando desda una funcion flecha")
}
funcionFlecha();

const multiplicacion=(n, m)=>{
    return n*m;
}
console.log("La multiplicacion es: ", multiplicacion(3,3));

console.log("FUNCION RETORNO DIRECTO");
const cuadrado =x=>x*x;
console.log(cuadrado(5));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function division(z,k=3){
    return z/k;
}
console.log("Resultado de la division es: ",division(40,8));
console.log("Resultado de la division es: ",division(40));