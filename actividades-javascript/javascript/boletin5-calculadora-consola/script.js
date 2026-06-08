/* ===================================================================
   Boletín 5 - Calculadora (operadores simulados), matrices y burbuja
   Autor: Alejandro López
   En la calculadora SOLO se usan los operadores + y -; el resto
   (multiplicación, división, resto y exponenciación) se simulan.
=================================================================== */

function imprimir(texto) {
    document.getElementById("salida").textContent += texto + "\n";
    console.log(texto);
}
function limpiar() {
    document.getElementById("salida").textContent = "";
}

/* -------------------------------------------------------------------
   Función: valorAbsoluto
   Entrada: n (number)
   Salida : el valor absoluto de n (number)
------------------------------------------------------------------- */
function valorAbsoluto(n) {
    if (n < 0) {
        return 0 - n; // convertimos el negativo en positivo usando la resta
    }
    return n;
}

/* -------------------------------------------------------------------
   Función: sumar
   Entrada: a (number), b (number)
   Salida : la suma de a y b (number)
------------------------------------------------------------------- */
function sumar(a, b) {
    return a + b; // operador permitido
}

/* -------------------------------------------------------------------
   Función: restar
   Entrada: a (number), b (number)
   Salida : la resta de a menos b (number)
------------------------------------------------------------------- */
function restar(a, b) {
    return a - b; // operador permitido
}

/* -------------------------------------------------------------------
   Función: multiplicar
   Entrada: a (number), b (number)
   Salida : el producto de a por b (number)
   Simula la multiplicación con sumas repetidas.
------------------------------------------------------------------- */
function multiplicar(a, b) {
    let resultado = 0;
    const veces = valorAbsoluto(b);          // cuántas veces sumamos
    // sumamos 'a' tantas veces como indique el valor absoluto de b
    for (let i = 0; i < veces; i++) {
        resultado = resultado + a;
    }
    // si b era negativo, cambiamos el signo del resultado
    if (b < 0) {
        resultado = 0 - resultado;
    }
    return resultado;
}

/* -------------------------------------------------------------------
   Función: dividirConResto
   Entrada: dividendo (number), divisor (number)
   Salida : objeto { cociente, resto } (object)
   Simula la división y el módulo con restas repetidas.
   Sirve tanto para la división como para el resto (%).
------------------------------------------------------------------- */
function dividirConResto(dividendo, divisor) {
    // controlamos la división por cero
    if (divisor === 0) {
        return { error: "No se puede dividir por 0." };
    }
    let cociente = 0;
    let resto = valorAbsoluto(dividendo);
    const divisorAbs = valorAbsoluto(divisor);

    // restamos el divisor mientras quepa en el resto
    while (resto >= divisorAbs) {
        resto = resto - divisorAbs;
        cociente = cociente + 1;
    }
    // ajustamos el signo del cociente
    if ((dividendo < 0) !== (divisor < 0)) {
        cociente = 0 - cociente;
    }
    // el resto conserva el signo del dividendo
    if (dividendo < 0) {
        resto = 0 - resto;
    }
    return { cociente: cociente, resto: resto };
}

/* -------------------------------------------------------------------
   Función: exponenciar
   Entrada: base (number), exponente (number, entero >= 0)
   Salida : base elevado al exponente (number)
   Simula la potencia con multiplicaciones repetidas.
------------------------------------------------------------------- */
function exponenciar(base, exponente) {
    let resultado = 1;
    // multiplicamos la base por sí misma 'exponente' veces
    for (let i = 0; i < exponente; i++) {
        resultado = multiplicar(resultado, base);
    }
    return resultado;
}

/* -------------------------------------------------------------------
   Función: iniciarCalculadora
   Menú principal. Primero se elige el operador y luego se piden
   los números. Controla tipos de datos y división por cero.
------------------------------------------------------------------- */
function iniciarCalculadora() {
    limpiar();
    let salir = false;

    while (!salir) {
        const opcion = prompt(
            "CALCULADORA\n" +
            "1 - Sumar\n2 - Restar\n3 - Multiplicar\n" +
            "4 - Dividir\n5 - Resto (módulo)\n6 - Exponenciación\n7 - Salir\n\n" +
            "Elige una opción:"
        );

        // salir del menú
        if (opcion === "7" || opcion === null) {
            imprimir("Calculadora finalizada.");
            salir = true;
            break;
        }

        // pedimos los dos números
        const a = parseFloat(prompt("Primer número:"));
        const b = parseFloat(prompt("Segundo número:"));

        // controlamos que sean números válidos
        if (isNaN(a) || isNaN(b)) {
            alert("Error: debes introducir números válidos.");
            imprimir("Error: datos no numéricos.");
            continue;
        }

        let resultado;
        switch (opcion) {
            case "1":
                resultado = sumar(a, b);
                imprimir(a + " + " + b + " = " + resultado);
                break;
            case "2":
                resultado = restar(a, b);
                imprimir(a + " - " + b + " = " + resultado);
                break;
            case "3":
                resultado = multiplicar(a, b);
                imprimir(a + " * " + b + " = " + resultado);
                break;
            case "4":
                resultado = dividirConResto(a, b);
                if (resultado.error) imprimir(resultado.error);
                else imprimir(a + " / " + b + " = " + resultado.cociente);
                break;
            case "5":
                resultado = dividirConResto(a, b);
                if (resultado.error) imprimir(resultado.error);
                else imprimir(a + " % " + b + " = " + resultado.resto);
                break;
            case "6":
                resultado = exponenciar(a, b);
                imprimir(a + " ** " + b + " = " + resultado);
                break;
            default:
                imprimir("Opción no válida.");
        }
    }
}

/* -------------------------------------------------------------------
   Ejercicio 2: matriz de valores pares
   Vector de 100 elementos con los primeros 100 pares.
   Se imprimen los que están en índices impares.
------------------------------------------------------------------- */
function matrizPares() {
    limpiar();
    const pares = [];
    for (let i = 0; i < 100; i++) {
        pares[i] = i * 2; // 0, 2, 4, 6...
    }
    imprimir("Pares en posiciones (índices) impares:");
    for (let i = 0; i < pares.length; i++) {
        if (i % 2 !== 0) { // índice impar
            imprimir("indice " + i + " -> " + pares[i]);
        }
    }
}

/* -------------------------------------------------------------------
   Ejercicio 3: matriz de valores impares
   Vector de 100 elementos con los primeros 100 impares.
   Se imprimen los de índices pares, en orden inverso.
------------------------------------------------------------------- */
function matrizImpares() {
    limpiar();
    const impares = [];
    for (let i = 0; i < 100; i++) {
        impares[i] = i * 2 + 1; // 1, 3, 5, 7...
    }
    imprimir("Impares en posiciones (índices) pares, en orden inverso:");
    for (let i = impares.length - 1; i >= 0; i--) {
        if (i % 2 === 0) { // índice par
            imprimir("indice " + i + " -> " + impares[i]);
        }
    }
}

/* -------------------------------------------------------------------
   Ejercicio 4: ordenación por el método de la burbuja
   Pide el número de elementos, los lee con prompt y los ordena.
------------------------------------------------------------------- */
function ordenarBurbuja() {
    limpiar();
    const n = parseInt(prompt("¿Cuántos elementos tendrá el vector?"));
    if (isNaN(n) || n <= 0) {
        imprimir("Número de elementos no válido.");
        return;
    }

    const vector = [];
    for (let i = 0; i < n; i++) {
        vector[i] = parseFloat(prompt("Elemento " + (i + 1) + ":"));
    }
    imprimir("Vector desordenado: " + vector.join(", "));

    // algoritmo de la burbuja: comparamos parejas y las intercambiamos
    for (let i = 0; i < vector.length - 1; i++) {
        for (let j = 0; j < vector.length - 1 - i; j++) {
            if (vector[j] > vector[j + 1]) {
                const temporal = vector[j];
                vector[j] = vector[j + 1];
                vector[j + 1] = temporal;
            }
        }
    }
    imprimir("Vector ordenado:    " + vector.join(", "));
}
