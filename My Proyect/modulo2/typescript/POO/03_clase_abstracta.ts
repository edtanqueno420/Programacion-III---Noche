abstract class Vehiculo {
    abstract encenderMotor(): void;

    estacionar(): void {
        console.log('El vehículo está estacionado');
    }
}

class Auto3 extends Vehiculo {
    encenderMotor(): void {
        console.log('Motor encendido: Vroom Vroom!');
    }
}

const miAuto = new Auto3();
miAuto.encenderMotor();
miAuto.estacionar();
