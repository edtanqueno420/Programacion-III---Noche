import { Vehiculo } from "./05_herencias.ts";

class Camion extends Vehiculo {
    private capacidadCarga: number = 0;

    setCapacidad(capacidad: number): void {
        this.capacidadCarga = capacidad;
    }

    getCapacidad(): number {
        return this.capacidadCarga;
    }
}

const miCamion = new Camion('Mercedes');
miCamion.setCapacidad(1000);
console.log('Capacidad de carga:', miCamion.getCapacidad(), 'kg');
miCamion.moverse();
