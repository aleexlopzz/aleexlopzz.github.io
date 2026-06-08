/* ===================================================================
   Boletín 4 - Estructuras de datos y funciones
   Autor: Alejandro López
=================================================================== */

function imprimir(texto) {
    document.getElementById("salida").textContent += texto + "\n";
    console.log(texto);
}
function limpiar() {
    document.getElementById("salida").textContent = "";
}

/* ---- Ejercicio 1: array de números ---- */
function ej1() {
    limpiar();
    const numeros = [3, 5, 7, 2, 8, 10, 4, 6, 1, 9];

    // suma con reduce
    const suma = numeros.reduce((acc, n) => acc + n, 0);
    imprimir("Suma: " + suma);

    // promedio
    imprimir("Promedio: " + (suma / numeros.length));

    // máximo y mínimo con el operador spread
    imprimir("Máximo: " + Math.max(...numeros));
    imprimir("Mínimo: " + Math.min(...numeros));

    // nuevo array con cada elemento doblado
    const numerosDobles = numeros.map(n => n * 2);
    imprimir("Dobles: " + numerosDobles.join(", "));

    // ordenar de menor a mayor (copia para no modificar el original)
    const ordenado = [...numeros].sort((a, b) => a - b);
    imprimir("Ordenado: " + ordenado.join(", "));
}

/* ---- Ejercicio 2: matriz bidimensional ---- */
function ej2() {
    limpiar();
    let matriz = [
        [3, 5, 7],
        [2, 8, 10],
        [4, 6, 1]
    ];

    // aplanamos la matriz para los cálculos
    const planos = matriz.flat();
    const suma = planos.reduce((acc, n) => acc + n, 0);
    imprimir("Suma total: " + suma);
    imprimir("Promedio: " + (suma / planos.length));
    imprimir("Máximo: " + Math.max(...planos));
    imprimir("Mínimo: " + Math.min(...planos));

    // matriz con cada valor doblado
    const matrizDobles = matriz.map(fila => fila.map(n => n * 2));
    imprimir("Dobles: " + JSON.stringify(matrizDobles));

    // ordenar cada fila de forma ascendente
    const ordenada = matriz.map(fila => [...fila].sort((a, b) => a - b));
    imprimir("Filas ordenadas: " + JSON.stringify(ordenada));
}

/* ---- Ejercicio 3: conjuntos (Set) ---- */
function ej3() {
    limpiar();
    let conjuntoA = new Set([1, 2, 3, 4, 5]);
    let conjuntoB = new Set([4, 5, 6, 7, 8]);

    // unión
    const union = new Set([...conjuntoA, ...conjuntoB]);
    imprimir("Unión: " + [...union].join(", "));

    // intersección (los que están en A y también en B)
    const interseccion = new Set([...conjuntoA].filter(x => conjuntoB.has(x)));
    imprimir("Intersección: " + [...interseccion].join(", "));

    // diferencia (en A pero no en B)
    const diferencia = new Set([...conjuntoA].filter(x => !conjuntoB.has(x)));
    imprimir("Diferencia A - B: " + [...diferencia].join(", "));

    // pertenencia
    imprimir("¿3 en A? " + conjuntoA.has(3));
    imprimir("¿8 en B? " + conjuntoB.has(8));

    // todos los únicos ordenados
    const todos = [...union].sort((a, b) => a - b);
    imprimir("Únicos ordenados: " + todos.join(", "));
}

/* ---- Ejercicio 4: mapa de estudiantes ---- */
function ej4() {
    limpiar();
    let estudiantes = new Map([
        ["Ana", 85], ["Luis", 92], ["María", 76], ["Carlos", 88], ["Sofía", 95]
    ]);

    // agregar un nuevo estudiante
    estudiantes.set("Diego", 70);
    imprimir("Estudiantes: " + JSON.stringify([...estudiantes]));

    // promedio de calificaciones
    let total = 0;
    estudiantes.forEach(nota => total += nota);
    imprimir("Promedio: " + (total / estudiantes.size).toFixed(2));

    // mejor y peor nota
    let mejor = null, peor = null;
    estudiantes.forEach((nota, nombre) => {
        if (mejor === null || nota > estudiantes.get(mejor)) mejor = nombre;
        if (peor === null || nota < estudiantes.get(peor)) peor = nombre;
    });
    imprimir("Mejor nota: " + mejor + " (" + estudiantes.get(mejor) + ")");
    imprimir("Peor nota: " + peor + " (" + estudiantes.get(peor) + ")");

    // mapa solo con aprobados (>= 80)
    const aprobados = new Map();
    estudiantes.forEach((nota, nombre) => {
        if (nota >= 80) aprobados.set(nombre, nota);
    });
    imprimir("Aprobados: " + JSON.stringify([...aprobados]));

    // ordenar por nota descendente
    const ordenado = new Map([...estudiantes].sort((a, b) => b[1] - a[1]));
    imprimir("Ordenado (desc): " + JSON.stringify([...ordenado]));
}

/* ---- Ejercicio 5: operaciones de inserción/eliminación en array ---- */
function ej5() {
    limpiar();
    let frutas = ["manzana", "banana", "naranja"];
    imprimir("Original: " + frutas.join(", "));

    frutas.push("kiwi");              // al final
    imprimir("push(kiwi): " + frutas.join(", "));

    frutas.unshift("fresa");          // al principio
    imprimir("unshift(fresa): " + frutas.join(", "));

    frutas.pop();                     // borra el último
    imprimir("pop(): " + frutas.join(", "));

    frutas.shift();                   // borra el primero
    imprimir("shift(): " + frutas.join(", "));

    frutas.splice(2, 0, "mango");     // inserta en la posición 2
    imprimir("splice(mango en 2): " + frutas.join(", "));

    // copia independiente del original
    const copia = [...["manzana", "banana", "naranja"]];
    copia.push("uva");
    copia.shift();
    imprimir("Original intacto: " + ["manzana", "banana", "naranja"].join(", "));
    imprimir("Copia modificada: " + copia.join(", "));
}

/* ---- Ejercicio 6: nombres, Set y Map de edades ---- */
function ej6() {
    limpiar();
    const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];

    // convertimos a Set para eliminar duplicados
    const nombresUnicos = new Set(nombres);

    // mapa nombre -> edad aleatoria (20 a 30)
    const edades = new Map();
    nombresUnicos.forEach(n => edades.set(n, edadAleatoria()));

    // recorrer el Set con for...of
    imprimir("Nombres (for...of):");
    for (const nombre of nombresUnicos) {
        imprimir(" - " + nombre);
    }

    // recorrer el Map con forEach
    imprimir("Edades (forEach):");
    edades.forEach((edad, nombre) => imprimir(" - " + nombre + ": " + edad));

    // agregar dos nombres nuevos
    nombres.push("Diego", "Lucía");
    nombresUnicos.add("Diego");
    nombresUnicos.add("Lucía");
    edades.set("Diego", edadAleatoria());
    edades.set("Lucía", edadAleatoria());

    // recorrer con for clásico sobre el array
    imprimir("Lista actualizada (for clásico):");
    const lista = [...nombresUnicos];
    for (let i = 0; i < lista.length; i++) {
        imprimir(" - " + lista[i] + ": " + edades.get(lista[i]));
    }

    // opcional: total y promedio
    let suma = 0;
    edades.forEach(e => suma += e);
    imprimir("Total nombres únicos: " + nombresUnicos.size);
    imprimir("Edad promedio: " + (suma / edades.size).toFixed(1));
}
function edadAleatoria() {
    return Math.floor(Math.random() * 11) + 20; // entre 20 y 30
}

/* ---- Ejercicio 7: función declarada por expresión ---- */
const sumaYComparar = function (num1, num2) {
    // validación de que ambos sean números
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return { error: "Ambos parámetros deben ser números." };
    }
    let comparacion;
    if (num1 > num2) comparacion = "num1 es mayor que num2";
    else if (num1 < num2) comparacion = "num1 es menor que num2";
    else comparacion = "num1 y num2 son iguales";
    return { suma: num1 + num2, mensaje: comparacion };
};
function ej7() {
    limpiar();
    imprimir(JSON.stringify(sumaYComparar(8, 3)));
    imprimir(JSON.stringify(sumaYComparar(2, 2)));
    imprimir(JSON.stringify(sumaYComparar("hola", 5))); // provoca el error
}

/* ---- Ejercicio 8: función anónima con valores por defecto ---- */
const calcularArea = function (base = 1, altura = 1) {
    if (typeof base !== "number" || typeof altura !== "number") {
        return "Error: base y altura deben ser números.";
    }
    return base * altura;
};
function ej8() {
    limpiar();
    imprimir("Sin argumentos: " + calcularArea());      // usa 1 y 1
    imprimir("Solo base (5): " + calcularArea(5));       // altura por defecto
    imprimir("Base y altura (5,4): " + calcularArea(5, 4));
    imprimir("Con error: " + calcularArea("x", 4));
}

/* ---- Ejercicio 9: función con spread (número variable de parámetros) ---- */
const sumaNumeros = function (...numeros) {
    // si algún parámetro no es número, devolvemos error
    if (numeros.some(n => typeof n !== "number")) {
        return "Error: todos los parámetros deben ser números.";
    }
    return numeros.reduce((acc, n) => acc + n, 0);
};
function ej9() {
    limpiar();
    imprimir("1,2,3,4,5 -> " + sumaNumeros(1, 2, 3, 4, 5));
    imprimir("10,20,30 -> " + sumaNumeros(10, 20, 30));
    imprimir("Sin argumentos -> " + sumaNumeros());
    imprimir("Con texto -> " + sumaNumeros(1, "dos", 3));
}

/* ---- Ejercicio 10: filtrar y transformar con callbacks ---- */
function filtrarYTransformar(array, callbackFiltro, callbackTransformar) {
    // validamos que los callbacks sean funciones
    if (typeof callbackFiltro !== "function" || typeof callbackTransformar !== "function") {
        return "Error: los callbacks deben ser funciones.";
    }
    return array.filter(callbackFiltro).map(callbackTransformar);
}
function ej10() {
    limpiar();
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // pares multiplicados por 2
    const pares = filtrarYTransformar(numeros, n => n % 2 === 0, n => n * 2);
    imprimir("Pares x2: " + pares.join(", "));

    // impares elevados al cuadrado
    const impares = filtrarYTransformar(numeros, n => n % 2 !== 0, n => n ** 2);
    imprimir("Impares al cuadrado: " + impares.join(", "));
}

/* ---- Ejercicio 11: gestor de tareas con función autoejecutable ---- */
// la IIFE inicializa el array de tareas una sola vez
let tareas = (function () {
    return ["Limpiar la casa", "Hacer la compra", "Estudiar JavaScript"];
})();

function agregarTareas(...nuevas) {
    // solo añadimos strings no vacíos
    nuevas.forEach(t => {
        if (typeof t === "string" && t.trim() !== "") {
            tareas.push(t);
        }
    });
}
function mostrarTareas() {
    for (let i = 0; i < tareas.length; i++) {
        imprimir((i + 1) + ". " + tareas[i]);
    }
}
function ej11() {
    limpiar();
    agregarTareas("Hacer ejercicio", "Leer un libro");
    imprimir("Lista de tareas:");
    mostrarTareas();
}
