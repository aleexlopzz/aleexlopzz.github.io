/* ===================================================================
   Boletín 1 - Parte 3: 15 actividades de JavaScript
   Autor: Alejandro López
=================================================================== */

/* ---- Actividad 1: nombre, año de nacimiento y mayoría de edad ---- */
function actividad1() {
    const nombre = document.getElementById("a1-nombre").value;
    const edad = parseInt(document.getElementById("a1-edad").value);
    const anioActual = new Date().getFullYear();
    const anioNacimiento = anioActual - edad; // año aproximado de nacimiento
    let mensaje;
    if (edad >= 18) {
        mensaje = nombre + " tiene " + edad + " años y es mayor de Edad";
    } else {
        mensaje = nombre + " tiene " + edad + " años y es menor de Edad";
    }
    mensaje += " (nacido aproximadamente en " + anioNacimiento + ").";
    document.getElementById("a1-resultado").innerHTML = mensaje;
}

/* ---- Actividad 2: divisible por dos con el operador módulo ---- */
function actividad2() {
    const numero = parseInt(document.getElementById("a2-numero").value);
    let mensaje;
    if (numero % 2 === 0) {       // si el resto de dividir entre 2 es 0, es par
        mensaje = "El número " + numero + " SÍ es divisible por dos.";
    } else {
        mensaje = "El número " + numero + " NO es divisible por dos.";
    }
    document.getElementById("a2-resultado").innerHTML = mensaje;
}

/* ---- Actividad 3: estaciones guardadas en un array ---- */
function actividad3() {
    const estaciones = ["invierno", "primavera", "verano", "otoño"];
    const numero = parseInt(document.getElementById("a3-numero").value);
    const div = document.getElementById("a3-resultado");
    if (numero >= 1 && numero <= 4) {
        // el array empieza en 0, por eso restamos 1 al número pedido
        div.innerHTML = "<b>" + estaciones[numero - 1] + "</b>";
    } else {
        div.innerHTML = "Introduce un número entre 1 y 4.";
    }
}

/* ---- Actividad 4: estación según el mes usando SWITCH ---- */
function actividad4() {
    const mes = document.getElementById("a4-mes").value.toLowerCase().trim();
    let estacion;
    switch (mes) {
        case "diciembre":
        case "enero":
        case "febrero":
            estacion = "invierno";
            break;
        case "marzo":
        case "abril":
        case "mayo":
            estacion = "primavera";
            break;
        case "junio":
        case "julio":
        case "agosto":
            estacion = "verano";
            break;
        case "septiembre":
        case "octubre":
        case "noviembre":
            estacion = "otoño";
            break;
        default:
            estacion = "mes no válido";
    }
    document.getElementById("a4-resultado").innerHTML = "Estación: " + estacion;
}

/* ---- Actividad 5: misma lógica que la 4 pero con IF ---- */
function actividad5() {
    const mes = document.getElementById("a5-mes").value.toLowerCase().trim();
    let estacion;
    if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
        estacion = "invierno";
    } else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
        estacion = "primavera";
    } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
        estacion = "verano";
    } else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
        estacion = "otoño";
    } else {
        estacion = "mes no válido";
    }
    document.getElementById("a5-resultado").innerHTML = "Estación: " + estacion;
}

/* ---- Actividad 6: cálculo del IVA según la cantidad ---- */
function actividad6() {
    const nombre = document.getElementById("a6-nombre").value;
    const cantidad = parseFloat(document.getElementById("a6-cantidad").value);
    let iva;
    if (cantidad >= 5000) {
        iva = 0.10;                       // 10%
    } else if (cantidad > 3000) {         // entre 3001 y 4999
        iva = 0.15;                       // 15%
    } else {
        iva = 0.21;                       // 21%
    }
    const total = cantidad + (cantidad * iva); // cantidad final con IVA
    document.getElementById("a6-resultado").innerHTML =
        nombre + ", la cantidad final a pagar es de " + total.toFixed(2) +
        " € (IVA del " + (iva * 100) + "%).";
}

/* ---- Actividad 7: gentilicio andaluz ---- */
function actividad7() {
    const nombre = document.getElementById("a7-nombre").value;
    const provincia = document.getElementById("a7-provincia").value;
    const pueblo = document.getElementById("a7-pueblo").value;
    // asociamos cada provincia con su gentilicio
    const gentilicios = {
        almeria: "almeriense",
        cadiz: "gaditano",
        cordoba: "cordobés",
        granada: "granadino",
        huelva: "onubense",
        jaen: "jiennense",
        malaga: "malagueño",
        sevilla: "sevillano"
    };
    document.getElementById("a7-resultado").innerHTML =
        nombre + ", eres " + gentilicios[provincia] + " de " + pueblo + ".";
}

/* ---- Actividad 8: conversor kilómetros / millas ---- */
function actividad8() {
    const valor = parseFloat(document.getElementById("a8-valor").value);
    const tipo = document.getElementById("a8-tipo").value;
    const FACTOR = 1.60934; // 1 milla = 1,60934 km
    let resultado;
    if (tipo === "km-millas") {
        resultado = valor / FACTOR;
        document.getElementById("a8-resultado").innerHTML =
            valor + " km son " + resultado.toFixed(2) + " millas.";
    } else {
        resultado = valor * FACTOR;
        document.getElementById("a8-resultado").innerHTML =
            valor + " millas son " + resultado.toFixed(2) + " km.";
    }
}

/* ---- Actividad 9: número de caracteres de una cadena ---- */
function actividad9() {
    const texto = document.getElementById("a9-texto").value;
    document.getElementById("a9-resultado").innerHTML =
        'El texto tiene ' + texto.length + " caracteres.";
}

/* ---- Actividad 10: palabra con más caracteres (alert) ---- */
function actividad10() {
    const p1 = document.getElementById("a10-palabra1").value;
    const p2 = document.getElementById("a10-palabra2").value;
    if (p1.length > p2.length) {
        alert('La palabra más larga es "' + p1 + '".');
    } else if (p2.length > p1.length) {
        alert('La palabra más larga es "' + p2 + '".');
    } else {
        alert("Las dos palabras tienen el mismo número de caracteres.");
    }
}

/* ---- Actividad 11: sumatorio desde 0 hasta N ---- */
function actividad11() {
    const n = parseInt(document.getElementById("a11-numero").value);
    let suma = 0;
    for (let i = 0; i <= n; i++) { // recorremos de 0 a N sumando cada número
        suma += i;
    }
    document.getElementById("a11-resultado").innerHTML =
        "La suma de 0 a " + n + " es " + suma + ".";
}

/* ---- Actividad 12: tabla de recetas generada con JavaScript ---- */
function actividad12() {
    const recetas = [
        { id: 1, nombrereceta: "Salmorejo", ingredientes: "tomate, aceite y pan" },
        { id: 2, nombrereceta: "Gachas", ingredientes: "harina, agua y azúcar" },
        { id: 3, nombrereceta: "Migas", ingredientes: "pan, ajos y aceite" }
    ];
    // construimos la tabla como cadena de texto HTML
    let tabla = "<table class='tabla-recetas'>";
    tabla += "<tr><th>ID</th><th>Nombre Receta</th><th>Ingredientes</th></tr>";
    for (const receta of recetas) {
        tabla += "<tr><td>" + receta.id + "</td><td>" +
                 receta.nombrereceta + "</td><td>" +
                 receta.ingredientes + "</td></tr>";
    }
    tabla += "</table>";
    document.getElementById("a12-resultado").innerHTML = tabla;
}

/* ---- Actividad 13: búsqueda del tesoro (tablero 5x5) ---- */
let tesoroFila, tesoroColumna, intentosTesoro;

function iniciarTesoro() {
    // generamos posición aleatoria del tesoro (0 a 4)
    tesoroFila = Math.floor(Math.random() * 5);
    tesoroColumna = Math.floor(Math.random() * 5);
    intentosTesoro = 0;
    document.getElementById("a13-resultado").innerHTML = "¡A buscar! Tienes 5 intentos.";

    // creamos el tablero de botones
    const tablero = document.getElementById("a13-tablero");
    tablero.innerHTML = "";
    for (let fila = 0; fila < 5; fila++) {
        for (let columna = 0; columna < 5; columna++) {
            const celda = document.createElement("button");
            celda.className = "celda-tesoro";
            celda.dataset.fila = fila;
            celda.dataset.columna = columna;
            celda.addEventListener("click", buscarTesoro);
            tablero.appendChild(celda);
        }
    }
}

function buscarTesoro(evento) {
    const celda = evento.target;
    const fila = parseInt(celda.dataset.fila);
    const columna = parseInt(celda.dataset.columna);
    intentosTesoro++;
    const div = document.getElementById("a13-resultado");

    if (fila === tesoroFila && columna === tesoroColumna) {
        // acierto
        celda.textContent = "💰";
        div.innerHTML = "¡Has descubierto el tesoro en " + intentosTesoro + " intentos!";
        bloquearTablero();
    } else {
        // calculamos la dirección (norte/sur + este/oeste)
        let direccion = "";
        if (fila > tesoroFila) direccion += "norte";
        else if (fila < tesoroFila) direccion += "sur";
        if (columna > tesoroColumna) direccion += "oeste";
        else if (columna < tesoroColumna) direccion += "este";

        celda.textContent = "✗";
        celda.disabled = true;

        if (intentosTesoro >= 5) {
            div.innerHTML = "¡Has perdido! El tesoro estaba en la fila " +
                (tesoroFila + 1) + ", columna " + (tesoroColumna + 1) + ".";
            mostrarTesoro();
            bloquearTablero();
        } else {
            div.innerHTML = "Frío... el tesoro está al " + direccion +
                ". Intento " + intentosTesoro + " de 5.";
        }
    }
}

function mostrarTesoro() {
    const celdas = document.querySelectorAll("#a13-tablero .celda-tesoro");
    for (const celda of celdas) {
        if (parseInt(celda.dataset.fila) === tesoroFila &&
            parseInt(celda.dataset.columna) === tesoroColumna) {
            celda.textContent = "💰";
        }
    }
}

function bloquearTablero() {
    const celdas = document.querySelectorAll("#a13-tablero .celda-tesoro");
    for (const celda of celdas) celda.disabled = true;
}

/* ---- Actividad 15: agenda con un Map (nombre / DNI) ---- */
const agenda = new Map(); // clave: DNI, valor: nombre

function agendaAnadir() {
    const nombre = document.getElementById("a15-nombre").value.trim();
    const dni = document.getElementById("a15-dni").value.trim();
    const div = document.getElementById("a15-resultado");
    if (nombre === "" || dni === "") {
        div.innerHTML = "Debes rellenar nombre y DNI.";
        return;
    }
    agenda.set(dni, nombre); // añadimos al mapa
    div.innerHTML = "Usuario añadido: " + nombre + " (" + dni + ").";
    // limpiamos los campos
    document.getElementById("a15-nombre").value = "";
    document.getElementById("a15-dni").value = "";
}

function agendaMostrar() {
    const div = document.getElementById("a15-resultado");
    if (agenda.size === 0) {
        div.innerHTML = "La agenda está vacía.";
        return;
    }
    let lista = "<b>Usuarios de la agenda:</b><ul>";
    // recorremos el mapa con forEach (valor, clave)
    agenda.forEach(function (nombre, dni) {
        lista += "<li>" + nombre + " — DNI: " + dni + "</li>";
    });
    lista += "</ul>";
    div.innerHTML = lista;
}
