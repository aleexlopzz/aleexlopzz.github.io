/* ===================================================================
   Boletín 1 - Parte 2: Manipulación del DOM
   Autor: Alejandro López
   Cada función responde a un punto del enunciado.
=================================================================== */

/* Actividad 1: cambiar el <h1>
   - 1.1 cambiar el texto a "DOM Manipulado"
   - 1.2 ponerlo en color rojo
   - 1.3 añadir la clase "titulo-activo" con classList.add */
function cambiarTitulo() {
    const titulo = document.getElementById("titulo"); // localizamos el h1
    titulo.textContent = "DOM Manipulado";            // 1.1 nuevo texto
    titulo.style.color = "red";                       // 1.2 color rojo
    titulo.classList.add("titulo-activo");            // 1.3 añadir clase
}

/* Actividad 2: cambiar el <p> añadiendo texto con <strong> */
function cambiarParrafo() {
    const parrafo = document.getElementById("parrafo");
    // innerHTML permite insertar etiquetas HTML como <strong>
    parrafo.innerHTML = "Esto es un párrafo <strong>modificado con JavaScript</strong>.";
}

/* Actividad 3: cambiar el contenido de las dos celdas */
function cambiarCeldas() {
    document.getElementById("celda1").textContent = "Nueva Celda 1"; // 3.1
    document.getElementById("celda2").textContent = "Nueva Celda 2"; // 3.2
}

/* Actividad 4: añadir una celda nueva dinámicamente
   Usamos insertCell() sobre la fila de la tabla. */
function anadirCelda() {
    const tabla = document.getElementById("tabla");
    const fila = tabla.rows[0];               // primera (y única) fila <tr>
    const nuevaCelda = fila.insertCell(-1);   // insertar al final de la fila
    nuevaCelda.textContent = "Celda añadida"; // contenido de la celda nueva
    // La celda nueva también debe reaccionar al click (actividad 6)
    nuevaCelda.addEventListener("click", ponerAmarillo);
}

/* Actividad 5: botón que cambia el color de las dos celdas */
function cambiarColorCeldas() {
    document.getElementById("celda1").style.backgroundColor = "#3498db";
    document.getElementById("celda2").style.backgroundColor = "#3498db";
    document.getElementById("celda1").style.color = "#ffffff";
    document.getElementById("celda2").style.color = "#ffffff";
}

/* Actividad 6: al hacer click en una celda, ponerla amarilla.
   Función reutilizable que recibe el evento del click. */
function ponerAmarillo(evento) {
    evento.target.style.backgroundColor = "yellow";
    evento.target.style.color = "#000000";
}

/* Asignamos el evento click a las celdas iniciales al cargar la página */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("celda1").addEventListener("click", ponerAmarillo);
    document.getElementById("celda2").addEventListener("click", ponerAmarillo);
});
