class Cliente {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años, cliente de la concesionaria Libertadores`);
    }
}

const clienteJuan = new Cliente('Juan Pérez', 28);
console.log('Nombre:');
console.log(clienteJuan.nombre);
console.log('Edad:');
console.log(clienteJuan.edad);
clienteJuan.saludar();
