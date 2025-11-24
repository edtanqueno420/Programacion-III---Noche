function saludar(): string {
    return '¡Bienvenido a la Concesionaria Libertadores!';
}

console.log(saludar());

function suma(): number {
    return 20000 + 15000;
}
console.log(suma());

function sumarOpcional(precio1: number, precio2?: number): number {
    return precio1 + (precio2 || 10000);
}
console.log(sumarOpcional(25000, 3000));
console.log(sumarOpcional(18000));

function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}
mostrarMensaje('Revisa los autos disponibles en la concesionaria');
