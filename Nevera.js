class Nevera extends Electrodomesticos {

    constructor(consumo, procedencia, capacidad) {
        super(consumo, procedencia);
        this.capacidad = capacidad;
    }

    get getCapacidad() {
        return capacidad;
    }

    set setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }

    valorExtra() {     
        var precioSin = this.precio;
        var extra = 0;
        var total = 0;

        if (this.capacidad > 120) {
            extra = (this.capacidad - 120) / 10;
            total = precioSin * 0.05 * extra;
            console.log(total);
            return total;
        }
        else {
            return extra;
        }
    }

    calcularPrecioNevera() {
        return this.precio + this.valorExtra();
    }
}