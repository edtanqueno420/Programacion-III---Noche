class Auto {
    public modelo: string;
    private marca: string;
    protected vin: string = 'LIB123456789';
    constructor(modelo: string, marca: string) {
        this.modelo = modelo;
        this.marca = marca;
    }
    getMarca(): string {
        return this.marca;
    }
    setMarca(marca: string): void {
        this.marca = marca;
    }
    getVin(): string {
        return this.vin;
    }
}

const autoToyota = new Auto('Corolla', 'Toyota');
console.log('Modelo:', autoToyota.modelo);
console.log('Marca:', autoToyota.getMarca());
console.log('VIN:', autoToyota.getVin());
autoToyota.setMarca('Honda');
console.log('Marca actualizada:', autoToyota.getMarca());
