/* ===================================================================
   Calculadora JavaScript
   Autor: Alejandro López
   Nombres de funciones, ids y clases en español.
=================================================================== */

// elemento de la pantalla
const pantalla = document.getElementById("pantalla");

// variables que guardan el estado de la calculadora
let valorActual = "0";   // lo que se está escribiendo ahora
let valorAnterior = "";  // el número guardado antes de pulsar un operador
let operador = null;      // el operador pendiente (+, -, *, /)
let reiniciarPantalla = false; // indica si hay que empezar un número nuevo

/* Actualiza el texto de la pantalla con el valor actual */
function actualizarPantalla() {
    pantalla.textContent = valorActual;
}

/* Añade un número (o el punto decimal) a la pantalla.
   Entrada: numero (string) */
function pulsarNumero(numero) {
    // si veníamos de un resultado u operador, empezamos de cero
    if (reiniciarPantalla) {
        valorActual = "";
        reiniciarPantalla = false;
    }
    // evitar más de un punto decimal
    if (numero === "." && valorActual.includes(".")) {
        return;
    }
    // si la pantalla es "0", lo sustituimos (salvo que sea un punto)
    if (valorActual === "0" && numero !== ".") {
        valorActual = numero;
    } else {
        valorActual += numero;
    }
    actualizarPantalla();
}

/* Guarda el operador elegido y el número anterior.
   Entrada: nuevoOperador (string) */
function pulsarOperador(nuevoOperador) {
    // si ya había una operación pendiente, la calculamos primero
    if (operador !== null && !reiniciarPantalla) {
        calcular();
    }
    valorAnterior = valorActual;
    operador = nuevoOperador;
    reiniciarPantalla = true;
}

/* Realiza la operación pendiente entre valorAnterior y valorActual */
function calcular() {
    // si no hay operación, no hacemos nada
    if (operador === null || valorAnterior === "") {
        return;
    }
    const a = parseFloat(valorAnterior);
    const b = parseFloat(valorActual);
    let resultado;

    switch (operador) {
        case "+": resultado = a + b; break;
        case "-": resultado = a - b; break;
        case "*": resultado = a * b; break;
        case "/":
            // controlamos la división por cero
            if (b === 0) {
                pantalla.textContent = "Error";
                valorActual = "0";
                valorAnterior = "";
                operador = null;
                reiniciarPantalla = true;
                return;
            }
            resultado = a / b;
            break;
    }

    valorActual = String(resultado);
    operador = null;
    valorAnterior = "";
    reiniciarPantalla = true;
    actualizarPantalla();
}

/* Borra todo y deja la calculadora a 0 (botón C) */
function borrarTodo() {
    valorActual = "0";
    valorAnterior = "";
    operador = null;
    reiniciarPantalla = false;
    actualizarPantalla();
}

/* Borra el último carácter escrito (botón DEL) */
function borrarUltimo() {
    valorActual = valorActual.slice(0, -1); // quitamos el último carácter
    if (valorActual === "") {
        valorActual = "0";
    }
    actualizarPantalla();
}

/* ----------------- asignación de eventos a los botones ----------------- */

// evento click en cada tecla de número
document.querySelectorAll(".numero").forEach(function (boton) {
    boton.addEventListener("click", function () {
        pulsarNumero(boton.dataset.numero);
    });
});

// evento click en cada operador
document.querySelectorAll(".operador").forEach(function (boton) {
    boton.addEventListener("click", function () {
        pulsarOperador(boton.dataset.operador);
    });
});

// evento click en el botón igual
document.getElementById("igual").addEventListener("click", calcular);

// evento click en el botón C (borrar todo)
document.getElementById("borrar").addEventListener("click", borrarTodo);

// evento click en el botón DEL (borrar último)
document.getElementById("borrarUltimo").addEventListener("click", borrarUltimo);
