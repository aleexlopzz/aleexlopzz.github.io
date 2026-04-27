


// PARTE 2
// EJ 1,2 y 3
function cambiarTodo() {

    let h1 = document.getElementById("titulo");
    h1.textContent = "DOM Manipulado";
    h1.style.color = "red";
    h1.classList.add("titulo-activo");

    let p = document.getElementById("parrafo");
    p.innerHTML = "Esto es un párrafo con <strong>negrita</strong>";

    document.getElementById("c1").textContent = "Nueva Celda 1";
    document.getElementById("c2").textContent = "Nueva Celda 2";
}


// EJERCICIO 4
function añadirCelda() {
    let fila = document.querySelector("tr");

    let nueva = document.createElement("td");
    nueva.textContent = "Nueva Celda";

    fila.appendChild(nueva);
}


// EJERCICIO 5
function colorCeldas() {
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");

    c1.style.background = "blue";
    c2.style.background = "green";
}


// EJERCICIO 6
document.getElementById("c1").onclick = function () {
    this.style.background = "yellow";
};

document.getElementById("c2").onclick = function () {
    this.style.background = "yellow";
};

// PARTE 3
// EJ 1
function persona() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = parseInt(document.getElementById("edad").value);

    let texto;

    if (edad >= 18) {
        texto = nombre + " " + apellidos + " tiene " + edad + " años y es mayor de edad";
    } else {
        texto = nombre + " " + apellidos + " tiene " + edad + " años y es menor de edad";
    }

    document.getElementById("res").innerHTML = texto;
}


// EJ 2
function divisible() {
    let n = parseInt(document.getElementById("num").value);

    let res = document.getElementById("res");
    res.style.background = "black";
    res.style.color = "white";

    if (n % 2 === 0) res.innerHTML = "Es divisible por 2";
    else res.innerHTML = "No es divisible por 2";
}


// EJ 3
function estacion() {
    let n = parseInt(document.getElementById("numEst").value);
    let estaciones = ["Invierno", "Primavera", "Verano", "Otoño"];

    document.getElementById("res").innerHTML = "<b>" + estaciones[n - 1] + "</b>";
}


// EJ 4
function mesSwitch() {
    let mes = document.getElementById("mes").value.toLowerCase();
    let estacion;

    switch (mes) {
        case "diciembre":
        case "enero":
        case "febrero":
            estacion = "Invierno"; break;

        case "marzo":
        case "abril":
        case "mayo":
            estacion = "Primavera"; break;

        case "junio":
        case "julio":
        case "agosto":
            estacion = "Verano"; break;

        case "septiembre":
        case "octubre":
        case "noviembre":
            estacion = "Otoño"; break;

        default:
            estacion = "Mes no válido";
    }

    let res = document.getElementById("res");
    res.style.background = "red";
    res.style.color = "yellow";
    res.innerHTML = estacion;
}


// EJ 5
function mesIf() {
    let mes = document.getElementById("mes").value.toLowerCase();
    let estacion;

    if (mes == "diciembre" || mes == "enero" || mes == "febrero")
        estacion = "Invierno";
    else if (mes == "marzo" || mes == "abril" || mes == "mayo")
        estacion = "Primavera";
    else if (mes == "junio" || mes == "julio" || mes == "agosto")
        estacion = "Verano";
    else if (mes == "septiembre" || mes == "octubre" || mes == "noviembre")
        estacion = "Otoño";
    else
        estacion = "Mes no válido";

    document.getElementById("res").innerHTML = estacion;
}


// EJ 6
function iva() {
    let nombre = document.getElementById("nombre2").value;
    let dinero = parseFloat(document.getElementById("dinero").value);

    let total;

    if (dinero >= 5000) total = dinero * 1.10;
    else if (dinero > 3000) total = dinero * 1.15;
    else total = dinero * 1.21;

    document.getElementById("res").innerHTML = nombre + " paga " + total.toFixed(2) + "€";
}


// EJ 7
function provincia() {
    let nombre = document.getElementById("nombre3").value;
    let provincia = document.getElementById("provincia").value;
    let pueblo = document.getElementById("pueblo").value;

    document.getElementById("res").innerHTML =
        nombre + ", eres de " + provincia + " de " + pueblo;
}


// EJ 8
function convertirKm() {
    let km = parseFloat(document.getElementById("km").value);
    let millas = km / 1.60934;

    document.getElementById("res").innerHTML = millas.toFixed(2) + " millas";
}

function convertirMillas() {
    let millas = parseFloat(document.getElementById("millas").value);
    let km = millas * 1.60934;

    document.getElementById("res").innerHTML = km.toFixed(2) + " km";
}


// EJ 9
function contar() {
    let texto = document.getElementById("texto").value;
    document.getElementById("res").innerHTML = "Tiene " + texto.length + " caracteres";
}


// EJ 10
function palabras() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;

    if (p1.length > p2.length) {
        alert("Más larga: " + p1);
    } else if (p2.length > p1.length) {
        alert("Más larga: " + p2);
    } else {
        alert("Son iguales");
    }
}