/**     BUCLES E INTERACCIONES
//WHILE

//INCREMENTO

let i = 0;

while (i <= 15){
    console.log("El valor de i : " , i);
    i = i + i;
}

// DECREMENTO

let numero = 100

while (numero > 0){
    document.write("Te queda de saldo ", numero, '<br>');
    numero = numero - 5
}


//DO WHILE

let i = 5; 

do{
    console.log("El valor de i = ", k);
    i = i + 1;
}while (i < 5)

//PRACTICA WHILE
let pasos = 100
while(pasos > 0){
    if(pasos === 1){
        document.write("Solo falta ", pasos, " paso por caminar. ", '<br>')
    }else{document.write("Te quedan ", pasos, " pasos por caminar", '<br>')
}
    pasos = pasos - 1;
}
//CICLO FOR

for(let i = 0; i <= 10; i++){
    alert (i)
} 

//TABLA DE MULTIPLICACION
let ingresarNumero = parseInt(prompt("Ingresa un numero"));
for(let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i;

    alert(ingresarNumero + " X " + i + " = " + resultado)
}

//SOLICITAR TURNO
for (let i = 1; i <= 20; i++){
    //SOLICITAR EN CADA REPETICION UN NOMBRE
    let ingresarNombre = prompt("ingrese un nombre");

    //INFORMAR EL TURNO ASIGNADO CON EL NOMBRE
    alert("Turno nro " + i + " Nombre: " + ingresarNombre);
}


//PROPIEDAD LENGTH DEL ARRAY
for  (let i = 0; i < 4; i++){
    console.log(i);
}

let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Mora",
    "Limon",
    "Banana",
    "Kiwi"
];
for(let i = 0; i < frutas.length; i++){
    let fruta = frutas[i];
    console.log(fruta + " tiene " + fruta.length + " letras");
}

//METODOS DE ARRAYS: FOREACH

let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"]

objetosMagicos.forEach(function(objetosMagicos){
    console.log("Objeto con foreach es: ", objetosMagicos)
})

objetosMagicos.forEach((objetosMagicos) =>
    console.log("Con funcion flecha: ", objetosMagicos))

//MAP

const numeros = [1, 2, 3, 4, 5, 6];
const porDos = numeros.map((x) => x * 2);
const porCien = numeros.map((x) => x * 100);

console.log("Por dos ", porDos)
console.log("Por cien ", porCien)


//FIND
//CON NUMERO
const encontrado = numeros.find(elemento => elemento > 3);

console.log(encontrado);

//CON STRINGS
const nombres = ["Ana", "Ema", "Juan"];
const encontrado2 = nombres.find((elemento) => elemento === "Ema")

console.log(encontrado2)

//FILTER

let numeros = [2, 5, 6, 18, 201];
let numMayoresCinco = numeros.filter((n) => {
    return n > 5
})

console.log(numMayoresCinco)*/


