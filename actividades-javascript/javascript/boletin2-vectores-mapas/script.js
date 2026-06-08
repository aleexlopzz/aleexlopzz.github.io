/* ===================================================================
   Boletín 2 - Vectores y Mapas
   Autor: Alejandro López
   imprimir() escribe en el panel de la página y en la consola.
=================================================================== */

function imprimir(texto) {
    document.getElementById("salida").textContent += texto + "\n";
    console.log(texto);
}
function limpiar() {
    document.getElementById("salida").textContent = "";
}

/* ---- Ejercicios 1, 2 y 3: vector notas y recorridos ---- */
function ej1_2_3() {
    limpiar();
    // 1) vector de 10 elementos inicializados a su índice
    const notas = [];
    for (let i = 0; i < 10; i++) {
        notas[i] = i;
    }
    imprimir("Vector notas: " + notas.join(", "));

    // 2) recorrido en orden normal
    imprimir("\nRecorrido normal:");
    for (let i = 0; i < notas.length; i++) {
        imprimir("notas[" + i + "] = " + notas[i]);
    }

    // 3) recorrido inverso
    imprimir("\nRecorrido inverso:");
    for (let i = notas.length - 1; i >= 0; i--) {
        imprimir("notas[" + i + "] = " + notas[i]);
    }
}

/* ---- Ejercicio 4: añadir/borrar al principio y al final ---- */
function ej4() {
    limpiar();
    const notas = [0, 1, 2, 3, 4];
    imprimir("Inicial: " + notas.join(", "));

    notas.unshift(99);  // añadir al principio
    imprimir("unshift(99) -> " + notas.join(", "));

    notas.push(100);    // añadir al final
    imprimir("push(100)  -> " + notas.join(", "));

    notas.shift();      // borrar el primero
    imprimir("shift()    -> " + notas.join(", "));

    notas.pop();        // borrar el último
    imprimir("pop()      -> " + notas.join(", "));
}

/* ---- Ejercicio 5: matriz 10x10 ---- */
function ej5() {
    limpiar();
    const matriz = [];
    // rellenamos la matriz; cada celda guarda fila*10 + columna
    for (let i = 0; i < 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = i * 10 + j;
        }
    }
    // mostramos cada elemento indicando su posición
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            imprimir("[" + i + "][" + j + "] => " + matriz[i][j]);
        }
    }
}

/* ---- Ejercicio 6: búsqueda del tesoro 20x20 (con prompt) ---- */
function ej6_tesoro() {
    limpiar();
    // posiciones aleatorias entre 0 y 19
    const filaTesoro = Math.floor(Math.random() * 20);
    const colTesoro = Math.floor(Math.random() * 20);
    let encontrado = false;

    imprimir("Tablero 20x20. Tienes 5 intentos. Filas y columnas de 0 a 19.");

    for (let intento = 1; intento <= 5 && !encontrado; intento++) {
        const fila = parseInt(prompt("Intento " + intento + " - Fila (0-19):"));
        const col = parseInt(prompt("Intento " + intento + " - Columna (0-19):"));

        if (fila === filaTesoro && col === colTesoro) {
            imprimir("Intento " + intento + ": ¡Tesoro encontrado en [" + fila + "][" + col + "]!");
            encontrado = true;
        } else {
            // calculamos la dirección hacia el tesoro
            let direccion = "";
            if (fila > filaTesoro) direccion += "norte";
            else if (fila < filaTesoro) direccion += "sur";
            if (col > colTesoro) direccion += "oeste";
            else if (col < colTesoro) direccion += "este";
            imprimir("Intento " + intento + ": fallaste. El tesoro está al " + direccion + ".");
        }
    }

    if (!encontrado) {
        imprimir("Has perdido. El tesoro estaba en [" + filaTesoro + "][" + colTesoro + "].");
    }
}

/* ---- Ejercicio 7: mapa DNI -> nombre completo ---- */
function ej7_agenda() {
    limpiar();
    const personas = new Map();
    // 7.1 agregar cuatro personas
    personas.set("11111111A", "Ana García López");
    personas.set("22222222B", "Luis Pérez Ruiz");
    personas.set("33333333C", "María Sánchez Gil");
    personas.set("44444444D", "Carlos Moreno Díaz");

    imprimir("Personas en la agenda: " + personas.size);

    // 7.2 pedir un DNI con prompt
    const dni = prompt("Introduce un DNI para buscar (ej: 11111111A):");

    // 7.3 / 7.4 mostrar nombre o mensaje si no existe
    if (personas.has(dni)) {
        alert("El nombre es: " + personas.get(dni));
        imprimir("Buscado " + dni + " -> " + personas.get(dni));
    } else {
        alert("Ese DNI no existe en la agenda.");
        imprimir("Buscado " + dni + " -> no existe.");
    }
}

/* ---- Ejercicio 8: inventario de una tienda de hardware ---- */
function ej8_inventario() {
    limpiar();
    const inventario = new Map();
    // 8.1 cinco productos con su stock inicial
    inventario.set("teclado", 5);
    inventario.set("ratón", 8);
    inventario.set("monitor", 3);
    inventario.set("disco SSD", 10);
    inventario.set("memoria RAM", 6);

    mostrarStock(inventario);

    // 8.2 pedir un producto para comprar
    const producto = prompt("¿Qué producto quieres comprar?");

    // 8.3 comprobar existencia y stock
    if (inventario.has(producto)) {
        const stock = inventario.get(producto);
        if (stock > 0) {
            inventario.set(producto, stock - 1); // reducir stock en 1
            imprimir("\nComprado 1 " + producto + ".");
            mostrarStock(inventario);
        } else {
            imprimir("\nError: no queda stock de " + producto + ".");
        }
    } else {
        imprimir("\nError: el producto '" + producto + "' no existe.");
    }
}

function mostrarStock(inventario) {
    imprimir("\nResumen del stock:");
    inventario.forEach(function (cantidad, nombre) {
        imprimir(" - " + nombre + ": " + cantidad);
    });
}

/* ---- Ejercicio 9: mapa nombre/edad -> arrays mayores y menores ---- */
function ej9_edades() {
    limpiar();
    const personas = new Map([
        ["Ana", 25], ["Luis", 17], ["María", 30], ["Carlos", 16], ["Sofía", 40],
        ["Pedro", 12], ["Lucía", 22], ["Marta", 15], ["Jorge", 19], ["Elena", 14]
    ]);

    const mayores = [];
    const menores = [];

    // clasificamos según la edad
    personas.forEach(function (edad, nombre) {
        if (edad >= 18) {
            mayores.push(nombre);
        } else {
            menores.push(nombre);
        }
    });

    imprimir("Mayores de edad: " + mayores.join(", "));
    imprimir("Menores de edad: " + menores.join(", "));
}
