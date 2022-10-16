/**CONDICIONALES, OPERADORES Y ARRAYS */
/** 

let grupo = [];

//ARRAY STRINGS
let mascotas = ["perro", "gato", "loro"];

//ARRAY NUMEROS
let numeros = [1,2,3,4];

//ARRAY BOOLEAN
let verdades = [true, false, true];

let persona = [123124, "fulanito", "cosme", 1323, true];

//ARRAY DE ARRAYS
let resultados = [
["gato", "miau"],
["perro", "guau"],
["vaca", "muu"]
];

let datos = ["dato1", "dato2", "dato3"]
console.log(datos)
console.log(datos[0])


//PROPIEDAD LENGTH

let colorMascotas = [
    ["gato", "blanco"],
    ["perro", "marron"],
    ["vaca", "manchada"]
    ];

    console.log(colorMascotas.length);//CANTIDAD DE ARRAYS
    console.log(colorMascotas[2][1]);//ACCEDEMOS A STRING
    console.log(colorMascotas[2].length);//CANTIDAD DE ELEMENTOS EN EL ARRAY
    console.log(colorMascotas[2][1].length);//CANTIDAD DE CARACTERES DEL ELEMENTO

//ACTIVIDAD1

let colores = ["amarrillo", "azul", "rojo", "naranja", "verde"];

console.log(colores);
console.log(colores.length);
console.log(colores[0]);

//CONDICIONALES

//SIN OPERADOR TERNARIO
let edad1 = 19;
let mayor
if (edad1 > 18){
    mayor = true;
} else{
    mayor = false;
}; 

console.log("Es mayor de edad? " + mayor)
//OPERADOR CONDICIONAL TERNARIO

let edad = 17;
let esMayorEdad = edad > 18 ? true : false;

console.log("Es mayor de edad? " + esMayorEdad)

let nombre = "Agustin"
let edad = 18;

edad >= 18 ? console.log(nombre + " es mayor de edad") : console.log(nombre + " no es mayor de edad")


//ACTIVIDAD 2
let lista = ["azucar", "yerba", "fideos", "sal", "aceite"]


let articulo = prompt("¿Que articulo desea agregar a la lista?");

if(lista.includes(articulo)){
    alert (articulo + " ya esta en la lista")
} else {
    lista.push(articulo)
    alert("La lista es: " + lista)
}

//SWITCH

let fruta = "banana";
switch (fruta) {
    case "manzana":
        color = "Rojo";
        break;
    case "kiwi":
        color = "Verde";
        break;
    default:
        color = "Blanco";
}
console.log("El color es " +color);

let color = prompt("Ingrese un color");
switch (color) {
    case "rosa":
        alert("Es Kimberly");
        break;
    case "negro":
        alert("Es Zack");
        break;
    case "amarillo":
        alert("Es Trini");
        break;
    case "azul":
        alert("Es Billy");
        break;
    case "roja":
        alert ("Es Jason");
        break;
    default:
        alert('No es un Power Ranger')
}

console.log(new Date().getDay());

let numeroDia = new Date().getDay();

switch (numeroDia) {
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miércoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
        case 6:
        dia = "Sábado";
        break;

    default:
        dia = "Domingo";

}

console.log("Hoy es " + dia)
*/




