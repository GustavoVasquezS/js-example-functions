// Función que muestra "¡Hola, mundo!" en la salida
function holaMundo() {
    document.getElementById("output").innerText = "¡Hola, mundo!";
}

// Función que obtiene el nombre ingresado y muestra un saludo personalizado
function saludar() {
    let nombre = document.getElementById("nombre").value; // Captura el valor del input
    document.getElementById("output").innerText = `¡Hola, ${nombre}!`; // Muestra el saludo
}

// Función que toma un número y devuelve el doble
function calcularDoble() {
    let numero = parseFloat(document.getElementById("numeroDoble").value); // Convierte a número
    document.getElementById("output").innerText = `El doble es: ${numero * 2}`;
}

// Función que calcula el promedio de tres números ingresados
function calcularPromedio() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let promedio = (num1 + num2 + num3) / 3; // Fórmula del promedio
    document.getElementById("output").innerText = `El promedio es: ${promedio}`;
}

// Función que encuentra el mayor de dos números
function encontrarMayor() {
    let a = parseFloat(document.getElementById("mayor1").value);
    let b = parseFloat(document.getElementById("mayor2").value);
    document.getElementById("output").innerText = `El mayor es: ${a > b ? a : b}`;
}

// Función que calcula el cuadrado de un número
function calcularCuadrado() {
    let numero = parseFloat(document.getElementById("cuadradoNum").value);
    document.getElementById("output").innerText = `El cuadrado es: ${numero * numero}`;
}
