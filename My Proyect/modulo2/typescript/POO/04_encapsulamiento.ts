class Cliente2 {
    private contraseña: string = 'Libertadores123';
    public nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    autenticar(contraseña: string): boolean {
        return contraseña === this.contraseña;
    }
}

const cliente = new Cliente2('Juan Pérez');
const autenticacion = cliente.autenticar('Libertadores123');
if (autenticacion) {
    console.log('Cliente autenticado exitosamente en la concesionaria');
} else {
    console.log('Acceso denegado al sistema de la concesionaria');
}
