abstract class CuentaBase {
    private saldo: number = 0;
    abstract operar(): void;

    modificarSaldo(monto: number): void {
        this.saldo += monto;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

class CuentaAhorroCliente extends CuentaBase {
    operar(): void {
        console.log('Operación en cuenta de ahorro del cliente de la concesionaria');
    }
}

class CuentaCorrienteCliente extends CuentaBase {
    operar(): void {
        console.log('Operación en cuenta corriente del cliente de la concesionaria');
    }   
}

const miCuentaAhorro = new CuentaAhorroCliente();
miCuentaAhorro.modificarSaldo(50000);
miCuentaAhorro.operar();
console.log('Saldo cuenta de ahorro:', miCuentaAhorro.consultarSaldo());

const miCuentaCorriente = new CuentaCorrienteCliente();
miCuentaCorriente.modificarSaldo(30000);
miCuentaCorriente.operar();
console.log('Saldo cuenta corriente:', miCuentaCorriente.consultarSaldo());
