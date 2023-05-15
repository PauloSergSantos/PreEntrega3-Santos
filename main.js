function saludo(saludo, querido, usuario){
    let mensaje = `${saludo} ${querido} ${usuario}`;
    alert(mensaje);
}

saludo("Hola", "querido", "usuario");
saludo("Bienvenido", "a mi tienda", "de libros");



let edad = prompt("Ingrese su edad");

if(edad < 12){
    alert("Fuiste asignado a la sección de niños");
}else if(edad < 18){
    alert("Fuiste asignado a la sección adolescentes");
}else{
    alert("Podes ingresar a cualquier sección");
} 


//asignación de turno
for(let numeroFila = 1; numeroFila <= 3; numeroFila++){
    let nombre = prompt("Ingrese su nombre");
    alert(`Numero de fila ${numeroFila} nombre: ${nombre}`);
}

//array de objetos
const libros = [
    {id: 1, nombre: "brillaras", genero: "trama", precio: 4400},
    {id: 2, nombre: "a dos metros de ti", genero: "ficcion", precio: 4200},
    {id: 3, nombre: "el cuaderno de Noah", genero: "romance", precio: 5000},
    {id: 4, nombre: "todo lo que nunca fuimos", genero: "novela", precio: 6000},
    {id: 5, nombre: "el visitante", genero: "terror", precio: 5600},
];

const precio = parseInt(prompt("Ingrese el monto minimo que quiere gastar"));
const precioLibro = libros.filter(item => item.precio <= precio);
alert(precioLibro);

const nombre = prompt("Ingrese el nombre del libro");
const buscarLibro = libros.find(item => item.nombre === nombre);
if(buscarLibro){
    let comunicado = `id: ${buscarLibro.id} Nombre: ${buscarLibro.nombre} Precio: $${buscarLibro.precio}`;
    alert(comunicado);    
}else{
    alert("Libro no encontrado");
};
