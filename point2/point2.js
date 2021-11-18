function changetype () {
    console.log ("1");
    let tipo = document.getElementById('tipotrabajador').value;
    
    if (tipo === "Fijo") {
        document.getElementById("horas").style.visibility="visible";
        document.getElementById("salariohora").style.visibility="visible";
        document.getElementById("deducciones").style.visibility="visible";
        document.getElementById("bonificaciones").style.visibility="visible";

        document.getElementById("lhoras").style.visibility="visible";
        document.getElementById("lsalariohora").style.visibility="visible";
        document.getElementById("ldeducciones").style.visibility="visible";
        document.getElementById("lbonificaciones").style.visibility="visible";

        document.getElementById("horastabajadas").style.visibility="hidden";
        document.getElementById("lhorastabajadas").style.visibility="hidden";

    } else {
        document.getElementById("horas").style.visibility="hidden";
        document.getElementById("salariohora").style.visibility="hidden";
        document.getElementById("deducciones").style.visibility="hidden";
        document.getElementById("bonificaciones").style.visibility="hidden";
        document.getElementById("horastabajadas").style.visibility="visible";

        document.getElementById("lhoras").style.visibility="hidden";
        document.getElementById("lsalariohora").style.visibility="hidden";
        document.getElementById("ldeducciones").style.visibility="hidden";
        document.getElementById("lbonificaciones").style.visibility="hidden";
        document.getElementById("lhorastabajadas").style.visibility="visible";
    }

}

function calculate () {
    let nombre = document.getElementById('nombre').value;
    let tipo = document.getElementById('tipotrabajador').value;
    let valor = 0;
    
    if (tipo === "Fijo") {
        let horas = document.getElementById("horas").value;
        let salariohora = document.getElementById("salariohora").value;
        let deducciones = document.getElementById("deducciones").value;
        let bonificaciones = document.getElementById("bonificaciones").value;

        if (horas && salariohora && deducciones && bonificaciones) {
            valor = (horas * salariohora) +  parseInt(bonificaciones) +  parseInt(deducciones);
            document.getElementById('result').innerHTML = "Salario total de " + nombre + ": " + (valor.toString());
        } else {
            document.getElementById('result').innerHTML = "Debe completar todos los campos";
        }
        

    } else {
        let horastabajadas = document.getElementById("horastabajadas").value;

        if (horastabajadas) {
            valor = horastabajadas * 6000;
            document.getElementById('result').innerHTML = "Salario total de " + nombre + ": " + (valor.toString());
        } else {
            document.getElementById('result').innerHTML = "Debe completar todos los campos";
        }
    }
}