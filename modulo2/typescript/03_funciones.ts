function saludar(): string {
    return 'Hola desde la función TypeScript';
}

console.log(saludar());

function suma(): number {
    return 3 + 7;
}
console.log(suma());

function sumarOpcional(numero1: number, numero2?: number): number {
    return numero1 + (numero2 || 15);
}
console.log(sumarOpcional(19, 6));
console.log(sumarOpcional(10));

function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}
mostrarMensaje('Mensaje desde el void');