 class Televisor extends Electrodomesticos {

    constructor(consumo, procedencia, pulgadas, TDT) {
        super (consumo, procedencia);
        this.pulgadas = pulgadas;
        this.TDT = TDT;
    }

    get getPulgadas() {
        return pulgadas;
    }
    set setPulgadas(pulgadas) {
        this.pulgadas = pulgadas;
    }
    get isTDT() {
        return TDT;
    }
    set setTDT(TDT) {
        this.TDT = TDT;
    }

    calcularPrecioPulgadas(){     
        var precioPulgadas = this.precio;
        let menorCon = 0;
        if (this.pulgadas > 40) {
            return menorCon = precioPulgadas * 0.3;
            alert("Se adiciona el 30% Pulgadas");
        }
       return menorCon;
    }

    calcularPrecioTDT(){

        var precioTDT = this.precio;
        var precioConTDT = 0;

        if (this.TDT == true ) {
            precioConTDT = precioTDT + 250000;
            return precioConTDT;
            alert("Se adiciona el 30% TDT");
        }
        return precioTDT;
    }

    calcularPrecioTelevisor() {
        var precioT = this.calcularPrecioPulgadas() + this.calcularPrecioTDT();
        return precioT;
    }

    

    
}