/** FUNCIONES


function saludar(nombre, apellido, edad){
    console.log("Hola " + nombre + " " + apellido + " Edad: " + edad)
}

saludar("Harry", "potter", 25)
saludar("Ron", "Weasly", 25)
saludar("Germione", "Grenyer", 25)

function saludar (nombre, apellido, serie){
    console.log("Hola " + nombre + " " + apellido + " Mi serie favorita es: " + serie)

}

saludar("Agustin", "Gallardo", "Juego de tronos") */


/** VALORES DE RETORNO

function multiplicar(Num1, Num2) */


/* ACTIVIDAD 2
function letrasNombre(nombre){
    return nombre.length;
}

let nombreLength = letrasNombre("Agustin")
console.log("Cantidad de letras del nombre" + " " + nombreLength)*/

//SCOPE

/**let numero = 1; //Variable global
function sumarEdad(edad){
    let num = 2; //Variable local

    return edad + num;
}

console.log(sumarEdad(5))

console.log(num); //No se puede por estar dentro de la funcion y ser variable local


// FUNCIONES ANONIMAS

const suma = function (a, b){
    return a + b;
}
console.log(suma(18, 20))

//Funcion flecha
const resta = (a, b) => a - b;
console.log(resta(38, 20))

//EJEMPLO
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const iva = x => x * 0.21;

let precioProducto = 500;
let precioDescuento = 50;

//Calculamos el precioProducto + IVA - precioDescuento

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento)

console.log(nuevoPrecio); 

let encabezado = document.querySelector("h1"); //Cuando son varios se le agrega all
console.log(encabezado); //innertext para mostrar solo documento

let texto = document.querySelector(".texto")
console.log(texto.innerHTML); 

//Practica
//Pedir dos numeros al usuario y sumarlos

function sumar(a, b){
    return a + b
}

let a = parseFloat(prompt("ingrese un numero")) //Al utilizarlo asi los valores de a y b quedan guardados
let b = parseFloat(prompt("ingrese un numero"))

let result = sumar(a, b)
console.log(result)

function sumar(a, b){
    return a + b
}

//const sumar = (a, b) => a + b ESTA VARIABLE TIENE LA VENTAJA DE QUE ES MAS CORTA Y SE PUEDE REALIZAR EN LA MISMA LINEA
//De esta forma los valores no quedan guardados
let result = sumar(parseFloat(prompt("ingrese un numero")), parseFloat(prompt("ingrese un numero")))
console.log(result)
    
// igual a == b    estrictamente igual a === b
function devolverMayor (a, b){
    if(a > b){
    return a}
    else if(a === b){
        return "son iguales"
    }
    else{
        return b
    }
}
let result = devolverMayor(parseFloat(prompt("ingrese un numero")), parseFloat(prompt("ingrese un numero")))
console.log(result)*/

//ACTIVIDAD 1: Calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados.

const calcularTiempoPromedio = () => {
    return turnos * tiempoPromedio
}

//recibe un numero, si es menor a 60 devuelve un num + min, si es mayor devuelve num + hs
const darFormatoDeHora = (tiempo) =>{
    if(tiempo < 60){
        return tiempo + "min"
    }
    else if(tiempo >= 60){
        return parseInt(tiempo/60) + ":" + (tiempo%60) + "hs"
    }
}

let tiempoPromedio = 15
let turnos = 0

const sacarTurno = () => {
    let nombre = prompt("ingrese su nombre")
    let quieroSacarTurno = prompt("desea sacar turno")
    if(quieroSacarTurno == "si" || quieroSacarTurno == "SI" || quieroSacarTurno == "Si"){
        alert(nombre + " " + "tiene turno para dentro de " + darFormatoDeHora(calcularTiempoPromedio()))
        turnos++
} 
else{
    alert ("que tenga buen dia")
}
}