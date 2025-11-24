export class Vehiculo {
    public marca: string;
    constructor(marca: string) {
        this.marca = marca;
    }
    moverse(): void {
        console.log(this.marca, 'está en movimiento en la concesionaria');
    }
}

class Auto extends Vehiculo {}

const miAuto = new Auto('Toyota');
miAuto.moverse();
