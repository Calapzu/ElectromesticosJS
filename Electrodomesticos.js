 class Electrodomesticos {

    constructor(consumo, procedencia) {
        
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.precio = this.precioFinal();
    }

    set setConsumo(consumo) {
        this.consumo = consumo;
    }

    set setProcedencia(procedencia) {
        this.procedencia = procedencia;
    }

    get getConsumo() {
        return this.consumo;
    }

    get getProcedencia() {
        return this.procedencia;
    }

    get getPrecio() {
        return this.precio;
    }

    set setPrecio(precio) {
        this.precio = precio;
    }

    /*calcularPrecio() {
        switch (this.consumo) {
            case 'A': {
                this.precio += 450000;
                break;
            }
            case 'B': {
                this.precio += 350000;
                break;
            }
            case 'C': {
                this.precio += 250000;
                break;
            }
        }
        switch (procedencia) {
            case "nacional": {
                this.precio += 250000;
                break;
            }
            case "importado": {
                this.precio += 350000;
                break;
            }
        }
        return precio;
    }*/
    
    precioConsumo(){
        var rprecioConsumo = 0;
        switch (consumo) {
            
            case "A": {
                rprecioConsumo = 450000;
                break;
            }
            case "B": {
                rprecioConsumo = 350000;
                break;
            }
            case "C": {
                rprecioConsumo = 250000;
                break;
            }
        }

        return rprecioConsumo;
    }

    precioProcedencia(){
        var rprecioProcedencia = 0;
        switch (procedencia) {
            case "nacional": {
                rprecioProcedencia += 250000;
                break;
            }
            case "importado": {
                rprecioProcedencia += 350000;
                break;
            }
        }

        return rprecioProcedencia;1
    }

    precioFinal(){
        let suma = this.precioProcedencia() + this.precioConsumo();
        this.setPrecio = suma;
        return suma;
    }


}
