let resultado = "";

function agregarCaracter(caracter) {
    resultado += caracter;
    document.getElementById("resultado").value = resultado;
}

function limpiar() {
    resultado = "";
    document.getElementById("resultado").value = resultado;
}

function calcular() {
    try {
        resultado = eval(resultado);
        document.getElementById("resultado").value = resultado;
    } catch (error) {
        document.getElementById("resultado").value = "Error";
        resultado = "";
    }
}
