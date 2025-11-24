import { Vehiculo } from "./05_herencias.ts";

class Camion extends Vehiculo {
    private capacidadCarga: number=0;

    setCapacidad(capacidad: number): void {
        this.capacidadCarga = capacidad;
    }

    getCapacidad(): number {
        return this.capacidadCarga;
    }
}

const miCamion = new Camion('Volvo');
miCamion.setCapacidad(500);
console.log('Capacidad:', miCamion.getCapacidad(), 'kg');
miCamion.moverse();

   

    