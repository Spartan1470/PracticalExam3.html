function multiply () {
    let ruta = document.getElementById('ruta').value;
    let placa = document.getElementById('placa').value;
    let pasajeros = document.getElementById('pasajeros').value;
    let valor = 0;
    if ( pasajeros ) {
        if (ruta === "A") {
            valor = parseInt(pasajeros) * 1200;
        } else {
            valor = parseInt(pasajeros) * 1000;
        }
        document.getElementById('result').innerHTML = "recolectado por bus " + placa + ": " + (valor.toString());
    } else {
        document.getElementById('result').innerHTML = "Debe digitar el numero de pasajeros";
    }
}