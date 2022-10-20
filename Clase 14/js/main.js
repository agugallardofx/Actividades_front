//OBJETOS

//DECLARACION DE UN OBJETO LITERAL
/**const producto1 = {
    id: 1,
    nombre: "Tallarines",
    precio: 80.5
}

console.log(producto1.id);
console.log(producto1.nombre);
console.log(producto1.precio);

// producto1["nombre"] = "Tirabuzon"

// console.log(producto1.nombre)

//IMPRIMO LAS PROPIEDADES DEL OBJETO CON NOTACION PUNTO
alert(
    "El producto id: " + producto1.id +
    "\nNombre: " + producto1.nombre +
    "\nPrecio: $ " + producto1.precio
)

//IMPRIMO LAS PROPIEDADES DEL OBJETO CON NOTACION CORCHETE

alert(
    "El producto id: " + producto1['id'] +
    "\nNombre: " + producto1['nombre'] +
    "\nPrecio: $ " + producto1['precio']
)

//EJEMPLO DE FUNCION CONSTRUCTORA

function producto(id, nombre, precio){
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.descuento = function(valor){
        this.precio -= valor;
    }
}

//INSTANCIAR OBJETOS CON FUNCION CONSTRUCTORA

const producto2 = new producto(1, "Tallarines", 80.5);
const producto3 = new producto(2, "pan", 100);
const producto4 = new producto(3, "Arroz", 90.5);

console.log(producto2);
console.log(producto3);
console.log(producto4);

producto4.descuento(10);
console.log(producto4.precio)

//EJEMPLO

//QUE EL USUARIO INGRESE LOS VALORES POR PROMPT
const producto5 = new producto(prompt("Ingresar id"), prompt("Ingresar nombre"), prompt("Ingresar precio"));

console.log(producto5);
producto5.descuento(100);
console.log(producto5.precio);




function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
const persona3 = new Persona("Bart", 9, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();
persona3.hablar();


*/
//DECLARACION DE CLASE

class productoClass{
    constructor(id, nombre, precio){
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
}
decuento(valor){
    this.precio -= valor;
}}

//INSTANCIAR OBJETOS CON CLASE

const producto6 = new productoClass(3, "chocolate", 250);
console.log(producto6)
producto6.decuento(10)
console.log(producto6)

//RECORRER PROPIEDADES Y VALORES POR PROPIEDAD DE UN OBJETO

for (let propiedad in producto6){
    console.log(propiedad);
    console.log(producto6[propiedad]);
}











/*
//Operador in y for… in
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
*/

