/* ===================================================================
   Bombilla 2
   Autor: Alejandro López
   Un solo botón enciende o apaga la bombilla cambiando el src
   de la imagen y el texto del botón.
=================================================================== */

// variable que recuerda el estado actual (false = apagada)
let encendida = false;

/* Función que se ejecuta al pulsar el botón */
function cambiarBombilla() {
    const imagen = document.getElementById("bombilla");
    const boton = document.getElementById("boton");

    if (encendida) {
        // si está encendida, la apagamos
        imagen.src = "bombilla-apagada.svg";
        boton.textContent = "Encender";
        encendida = false;
    } else {
        // si está apagada, la encendemos
        imagen.src = "bombilla-encendida.svg";
        boton.textContent = "Apagar";
        encendida = true;
    }
}
