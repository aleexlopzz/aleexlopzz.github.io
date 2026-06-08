/* ===================================================================
   Boletín 6 - Uso de Local Storage
   Autor: Alejandro López
   Guarda el color de las filas pares e impares de la tabla.
   Al recargar o volver a abrir el navegador, recupera los colores.
=================================================================== */

/* Aplica un color a las filas según su posición (par o impar).
   Entrada: colorImpar (string), colorPar (string) */
function aplicarColores(colorImpar, colorPar) {
    const filas = document.querySelectorAll("#tablaRecetas tbody tr");
    filas.forEach(function (fila, indice) {
        // indice empieza en 0: fila 1 (posición impar) -> indice 0
        const posicion = indice + 1;
        if (posicion % 2 === 0) {
            fila.style.backgroundColor = colorPar;   // filas pares
        } else {
            fila.style.backgroundColor = colorImpar; // filas impares
        }
    });
}

/* Lee los dos desplegables, aplica los colores y los guarda en Local Storage */
function guardarYAplicar() {
    const colorImpar = document.getElementById("colorImpares").value;
    const colorPar = document.getElementById("colorPares").value;

    aplicarColores(colorImpar, colorPar);

    // guardamos en Local Storage para que persista
    localStorage.setItem("colorImpares", colorImpar);
    localStorage.setItem("colorPares", colorPar);
}

/* Borra los colores guardados y recarga la página */
function borrarColores() {
    localStorage.removeItem("colorImpares");
    localStorage.removeItem("colorPares");
    location.reload();
}

/* Al cargar la página, recuperamos los colores guardados (si existen) */
document.addEventListener("DOMContentLoaded", function () {
    const selectImpar = document.getElementById("colorImpares");
    const selectPar = document.getElementById("colorPares");

    // recuperamos de Local Storage; si no hay nada, usamos el primer color
    const guardadoImpar = localStorage.getItem("colorImpares") || selectImpar.value;
    const guardadoPar = localStorage.getItem("colorPares") || selectPar.value;

    // dejamos los desplegables en el color guardado
    selectImpar.value = guardadoImpar;
    selectPar.value = guardadoPar;

    aplicarColores(guardadoImpar, guardadoPar);

    // cada vez que cambie un desplegable, guardamos y aplicamos
    selectImpar.addEventListener("change", guardarYAplicar);
    selectPar.addEventListener("change", guardarYAplicar);
});
