function saludo(saludo, querido, usuario){
    let mensaje = `${saludo} ${querido} ${usuario}`;
    alert(mensaje);
}

saludo("Hola", "querido", "usuario");
saludo("Bienvenido", "a mi tienda", "de libros");


//sintaxis avanzada
let confirmacion = prompt("¿Es tu primera vez comprando en nuestra página?");
confirmacion === "si" ? alert("Esperamos que nos vuelvas a elegir") : alert("Gracias por volver a confiar en nosotros")


setTimeout(() => {
    alert("Buena suerte!");
}, 1000);


let edad = prompt("Ingrese su edad");

if(edad <= 0){
    alert("Error,vuelva a ingresar su edad")
}else if(edad < 12){
    alert("Fuiste asignado a la sección de niños");
}else if(edad < 18){
    alert("Fuiste asignado a la sección adolescentes");
}else{
    alert("Podes ingresar a cualquier sección");
}


//asignación de turno
for(let numeroFila = 1; numeroFila <= 3; numeroFila++){
    let nombre = prompt("Ingrese su nombre");
    if(nombre != ""){
        alert(`Numero de fila ${numeroFila} nombre: ${nombre}`);
    }else{
        alert("Tiene que ingresar su nombre");
        let nombre = prompt("Ingrese su nombre");
        alert(`Numero de fila ${numeroFila} nombre: ${nombre}`);
    }

}


let contenido = document.getElementById("contenido");



//guardamos en el localStorage
localStorage.setItem("carrito", JSON.stringify(libros));

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


//carrito de compras
let carrito = [];

//recorro cada objeto del array
libros.forEach((item) => {
    let div = document.createElement("div");
    div.className = "contenido";
    div.innerHTML = `
        <h2 class="nombre">Nombre: ${item.nombre}</h2>
        <img src="${item.img}">
        <p class="id">ID: ${item.id}</p>
        <p class="genero">Genero: ${item.genero}</p>
        <b class="precio">Precio: $${item.precio}</b>
    `;

    contenido.append(div);


    //botón para comprar
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    div.append(comprar); 

    //agregar al carrito
    comprar.addEventListener("click", () => {
        carrito.push({
            nombre: item.nombre,
            img: item.img,
            id: item.id,
            genero: item.genero,
            precio: item.precio,
        });
        console.log(carrito);
        alert("producto agregado")
    });
});




//eliminar todo el carrito
let eliminar = document.getElementById("eliminar_carrito");
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
}else{
    let div = document.createElement("div");
    document.body.append(div);
}


eliminar.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
    alert("carrito eliminado");
});  


const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
    titulo.classList.add("color");
    setTimeout(() => {
        titulo.classList.remove("color");
    }, 2000);
    Toastify({
        text: "cambiaste el color",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, red, blue)"
        }
    }).showToast();

})


