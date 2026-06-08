/* ===================================================================
   Boletín 3 - Diálogos (prompt / alert / confirm)
   Autor: Alejandro López
=================================================================== */

function imprimir(texto) {
    document.getElementById("salida").textContent += texto + "\n";
    console.log(texto);
}
function limpiar() {
    document.getElementById("salida").textContent = "";
}

/* ---- Ejercicios 1 y 2 ----
   Pide dos números (por defecto mayor que 0), muestra la suma con alert,
   indica por consola si el primero es un número y si la suma supera 20. */
function ej1_2() {
    limpiar();
    const num1 = parseFloat(prompt("Introduce el primer número (mayor que 0):", "1"));
    const num2 = parseFloat(prompt("Introduce el segundo número (mayor que 0):", "1"));
    const suma = num1 + num2;

    alert("La suma es: " + suma);

    // 1.4 comprobar si el primero es realmente un número
    if (isNaN(num1)) {
        imprimir("El primer valor NO es un número.");
    } else {
        imprimir("El primer valor SÍ es un número.");
    }

    // ejercicio 2: indicar si la suma es mayor que 20
    if (suma > 20) {
        imprimir("La suma (" + suma + ") es mayor que 20.");
    } else {
        imprimir("La suma (" + suma + ") NO es mayor que 20.");
    }
}

/* ---- Ejercicio 3: nombre, edad, peso y estatura ---- */
function ej3() {
    limpiar();
    const nombre = prompt("Nombre:");
    const edad = parseInt(prompt("Edad (años):"));
    const peso = parseFloat(prompt("Peso (kg):"));
    const estatura = parseInt(prompt("Estatura (cm):"));

    imprimir("Nombre: " + nombre);
    imprimir(edad > 18 ? "Es mayor de edad" : "Es menor de edad");
    imprimir(peso < 50 ? "Es una persona delgada" : "Es una persona robusta");
    imprimir(estatura > 180 ? "Y es una persona alta" : "Es una persona baja");
}

/* ---- Ejercicio 4: desde el número hasta 100 ---- */
function ej4() {
    limpiar();
    const numero = parseInt(prompt("Introduce un número positivo y menor de 100:"));
    // verificamos que sea positivo y menor de 100
    if (numero > 0 && numero < 100) {
        for (let i = numero; i <= 100; i++) {
            imprimir(i);
        }
    } else {
        imprimir("El número debe ser positivo y menor de 100.");
    }
}

/* ---- Ejercicio 5: sumar dos números solo si el usuario quiere ---- */
function ej5() {
    limpiar();
    const num1 = parseFloat(prompt("Primer número:"));
    const num2 = parseFloat(prompt("Segundo número:"));

    // confirm devuelve true/false
    if (confirm("¿Quieres sumarlos?")) {
        imprimir("La suma es: " + (num1 + num2));
    } else {
        imprimir("No se ha realizado la suma.");
    }
}

/* ---- Ejercicio 6: tabla de multiplicar del 1 al 9 ---- */
function ej6() {
    limpiar();
    const numero = parseInt(prompt("Introduce un número del 1 al 9:"));
    if (numero >= 1 && numero <= 9) {
        imprimir("Tabla de multiplicar del " + numero + ":");
        for (let i = 1; i <= 10; i++) {
            imprimir(numero + " x " + i + " = " + (numero * i));
        }
    } else {
        imprimir("El número debe estar entre 1 y 9.");
    }
}

/* ---- Ejercicio 7: preguntar hasta 10 veces si quiere continuar ---- */
function ej7() {
    limpiar();
    let vez = 1;
    let continuar = true;
    while (vez <= 10 && continuar) {
        continuar = confirm("¿Es la " + vez + "ª vez que te pregunto si quieres continuar?");
        if (continuar) {
            imprimir("Vez " + vez + ": el usuario quiere continuar.");
            vez++;
        }
    }
    if (continuar) {
        imprimir("Fin: se ha llegado al máximo de 10 veces.");
    } else {
        imprimir("Fin: el usuario ha dicho que no en la vez " + vez + ".");
    }
}
