//var electrodomesticos = new Electrodomesticos('a', 'nacional');
//console.log(electrodomesticos);
//console.log(electrodomesticos.getProcedencia);


var ArregloElectromesticosI = [];
var ArregloElectromesticosN = [];

var ArregloTelevisoresI = [];
var ArregloTelevisoresN = [];

var ArregloNeverasI = [];
var ArregloNeverasN = [];



do {
    var caso = "";
    caso = prompt("Digite [1] para ingresar el inventario \n" +
        "Digite [2] para generar la factura\n" +
        "Digite [3] para mirar el inventario\n");

    switch (caso) {
        case "1":
            let tipoElectrodomesticos = prompt("Digite [1]si va a ingresar electrodomesticos en general \n" +
                "Digite [2]si va a ingresar televisores \n" +
                "Digite [3]si va a ingresar neveras ");

            let tipoElectrodomesticosInt = 0;
            tipoElectrodomesticosInt = parseInt(tipoElectrodomesticos, 10);

            switch (tipoElectrodomesticosInt) {
                case 1:
                    var cantidadElectro = 0;
                    do {

                        var procedencia = prompt("Digite la procedencia del electrodomestiscos generales");
                        console.info(procedencia.toLowerCase());

                        var consumo = prompt("Digite el tipo de consumo");
                        console.info(consumo);
                        //let consumoChart = consumo.charAt(0);

                        if (procedencia == "nacional") {

                            if (consumo == "A" || consumo == "B" || consumo == "C") {
                                let aas = new Electrodomesticos(consumo, procedencia);
                                alert(aas.precio);
                                console.log(aas.precio);

                                let precio = aas.precioFinal();
                                var n = { procedencia, consumo, precio }

                                ArregloElectromesticosN.push(n);
                            }


                        } else if (procedencia == "importado") {
                            if (consumo == "A" || consumo == "B" || consumo == "C") {

                                let as = new Electrodomesticos(consumo, procedencia);

                                let precio = as.precioFinal();
                                alert(as.precio);
                                var n = { procedencia, consumo, precio }

                                ArregloElectromesticosI.push(n);
                            }

                        }

                        let cantidadElectroSS = prompt("Digite [0] para salir del ciclo");
                        cantidadElectro = parseInt(cantidadElectroSS, 10);


                    } while (cantidadElectro != 0);

                    break;
                case 2:
                    cantidadElectro = 0;
                    do {


                        var procedencia = prompt("Digite la procedencia del electrodomestiscos");
                        console.info(procedencia.toLowerCase());

                        var consumo = prompt("Digite el tipo de consumo");
                        console.info(consumo);

                        var tieneTDT = prompt("Digite [1] si tiene TDT\n" + "Digite [2] si no tiene TDT\n");
                        let tieneTDTB = parseInt(tieneTDT, 10);

                        var pulgadasTv = prompt("Digite cuantas pulgadas tiene su TV");
                        var pulgadasTvI = parseInt(pulgadasTv, 10);

                        var booleana;

                        if (tieneTDTB == 1) {
                            booleana = true;
                        } else {
                            booleana = false;
                        }

                        alert(booleana);

                        if (pulgadasTvI > 40) {
                            pulgadasTvI = 41;
                        } else {
                            pulgadasTvI = pulgadasTvI;
                        }

                        if (procedencia == "nacional") {

                            if (consumo == "A" || consumo == "B" || consumo == "C") {

                                var televisor = new Televisor(consumo, procedencia, pulgadasTvI, booleana);

                                let precio = televisor.calcularPrecioTelevisor();
                                var n = { procedencia, consumo, pulgadasTvI, precio }

                                ArregloTelevisoresN.push(n);
                            }

                        } else if (procedencia == "importado") {
                            if (consumo == "A" || consumo == "B" || consumo == "C") {

                                var televisor = new Televisor(consumo, procedencia, pulgadasTvI, booleana);

                                let precio = televisor.calcularPrecioTelevisor();
                                var n = { procedencia, consumo, pulgadasTvI, precio }

                                ArregloTelevisoresI.push(n);
                            }

                        }

                        let cantidadElectroSS = prompt("Digite [0] para salir del ciclo");
                        cantidadElectro = parseInt(cantidadElectroSS, 10);

                    } while (cantidadElectro != 0);

                    break;
                case 3:
                    cantidadElectro = 0;
                    do {


                        var procedencia = prompt("Digite la procedencia del electrodomestiscos");
                        console.info(procedencia.toLowerCase());

                        var consumo = prompt("Digite el tipo de consumo");


                        var capacidadS = prompt("Digite cuanta capacidad tiene su nevera");
                        var capacidad = parseInt(capacidadS, 10);



                        if (capacidad > 120) {
                            capacidad = 121;
                        } else {
                            capacidad = capacidad;
                        }

                        if (procedencia == "nacional") {

                            if (consumo == "A" || consumo == "B" || consumo == "C") {

                                var nevera = new Nevera(consumo, procedencia, capacidad);

                                let precio = nevera.calcularPrecioNevera();
                                var n = { procedencia, consumo, precio, capacidad }

                                ArregloNeverasN.push(n);
                            }

                        } else if (procedencia == "importado") {
                            if (consumo == "A" || consumo == "B" || consumo == "C") {
                                alert("Entro if")
                                var nevera = new Nevera(consumo, procedencia, capacidad);

                                let precio = nevera.calcularPrecioNevera();
                                var n = { procedencia, consumoNevera, precio, capacidad }

                                ArregloNeverasI.push(n);
                            }

                        }

                        let cantidadElectroSS = prompt("Digite [0] para salir del ciclo");
                        cantidadElectro = parseInt(cantidadElectroSS, 10);

                    } while (cantidadElectro != 0);
                    break;
            }

            break;
        case "2":
            alert("El inventario de Electrodomesticos generales nacionales son:  " + ArregloElectromesticosN.length +
                "El inventario de Electrodomesticos generales internacionales son:  " + ArregloElectromesticosI.length +
                "El inventario de Televisores Nacionales son:  " + ArregloTelevisoresN.length +
                "El inventario de Televisores Internacionales son:  " + ArregloTelevisoresI.length +
                "El inventario de Neveras Nacionales son:  " + ArregloNeverasN.length +
                "El inventario de Neveras Internacionales son:  " + ArregloNeverasN.length);

            break;
        case "3":
            var caso3 = prompt("Digite [1] si quiere generar una factura de Electromesticos Generales\n" +
                "Digite [2] si quiere generar una factura de Televisores\n" +
                "Digite [3] si quiere generar una factura de Neveras\n");
            switch (caso3) {
                case "1":
                    let caso1_3 = prompt("Digite [1] si es nacional" +
                        "Digite [2] si es importado");
                    if (caso1_3 == "1") {
                        let indiceEliminar = prompt("Digite el indice del elemento que quiere hacer factura");
                        indiceEliminar = parseInt(indiceEliminar, 10);
                        var factura1 = ArregloElectromesticosN.splice(indiceEliminar, 1);
                    } else {
                        let indiceEliminar = prompt("Digite el indice del elemento que quiere hacer factura");
                        indiceEliminar = parseInt(indiceEliminar, 10);
                        var factura1_2 = ArregloElectromesticosI.splice(indiceEliminar, 1);
                    }
                    break;
                case "2":
                    let caso2_3 = prompt("Digite [1] si es nacional" +
                    "Digite [2] si es importado");
                if (caso2_3 == "1") {
                    let indiceEliminar = prompt("Digite el indice del elemento que quiere hacer factura");
                    indiceEliminar = parseInt(indiceEliminar, 10);
                    var factura2_1 = ArregloTelevisoresN.splice(indiceEliminar, 1);
                } else {
                    let indiceEliminar = prompt("Digite el indice del elemento que quiere hacer factura");
                    indiceEliminar = parseInt(indiceEliminar, 10);
                    var factura2_2 = ArregloTelevisoresI.splice(indiceEliminar, 1);
                }
                    break;
                case "3":
                    let caso3_3 = prompt("Digite [1] si es nacional" +
                    "Digite [2] si es importado");
                if (caso3_3 == "1") {
                    let indiceEliminar = prompt("Digite el indice del elemento que quiere hacer factura");
                    indiceEliminar = parseInt(indiceEliminar, 10);
                    var factura3_1 = ArregloTelevisoresN.splice(indiceEliminar, 1);
                } else {
                    let indiceEliminar = prompt("Digite el indice del elemento que quiere hacer factura");
                    indiceEliminar = parseInt(indiceEliminar, 10);
                    var factura3_2 = ArregloTelevisoresI.splice(indiceEliminar, 1);
                }
                    break;
            }
            alert(factura1);
            alert(factura1_2);
            alert(factura2_1);
            alert(factura2_2);
            alert(factura3_1);
            alert(factura3_2);
            break;

    }
    var caso1 = prompt("Digite [0] para salir");
} while (caso1 != "0");