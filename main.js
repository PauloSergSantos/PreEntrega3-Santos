/* function saludo(saludo, querido, usuario){
    let mensaje = `${saludo} ${querido} ${usuario}`;
    alert(mensaje);
}

saludo("Hola", "querido", "usuario");
saludo("Bienvenido", "a mi tienda", "de libros");



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

} */


let contenido = document.getElementById("contenido");

//array de objetos
const libros = [
    {id: 1, nombre: "brillaras", genero: "trama", precio: 4400, img: "https://i2.wp.com/caromarando.com/wp-content/uploads/2019/11/Brillaras-seras-viviras_2.jpg?fit=828%2C909&ssl=1"},
    {id: 2, nombre: "a dos metros de ti", genero: "ficcion", precio: 4200, img: "https://sbslibreria.vteximg.com.br/arquivos/ids/296730-1000-1000/9789871997381.jpg"},
    {id: 3, nombre: "el cuaderno de Noah", genero: "romance", precio: 5000, img: "https://images.cdn2.buscalibre.com/fit-in/360x360/0a/a5/0aa5b59d6b48e7d5925882f90dab6823.jpg"},
    {id: 4, nombre: "todo lo que nunca fuimos", genero: "novela", precio: 6000, img: "https://planetadelibrospe5.cdnstatics.com/usuaris/libros/fotos/341/m_prensa/todo-lo-que-nunca-fuimos_9786125027122_3d_202108102145.png"},
    {id: 5, nombre: "el visitante", genero: "terror", precio: 5600, img: "https://www.libreriasinopsis.com/imagenes/9788401/978840102119.JPG"},
];

//guardamos en el localStorage
localStorage.setItem("carrito", JSON.stringify(libros));

/* const precio = parseInt(prompt("Ingrese el monto minimo que quiere gastar"));
const precioLibro = libros.filter(item => item.precio <= precio);
alert(precioLibro);

const nombre = prompt("Ingrese el nombre del libro");
const buscarLibro = libros.find(item => item.nombre === nombre);
if(buscarLibro){
    let comunicado = `id: ${buscarLibro.id} Nombre: ${buscarLibro.nombre} Precio: $${buscarLibro.precio}`;
    alert(comunicado);    
}else{
    alert("Libro no encontrado");
}; */

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
        /* <button id="botonElegir${item.id}">Seleccionar</button> */
    `;

    contenido.append(div);

    /* let botonElegir = document.getElementById(`botonElegir${item.id}`)
    botonElegir.addEventListener("click", () => {
        console.log(`Elegido ${item.nombre}`);
        toastify({
            text: `Agregaste ${item.nombre} al carrito`,
            duration: 3000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, blue, yellow)",
            }, 
            onClick: function(){}
        }).showToast();
    }) */

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
    });
});

//eliminar todo el carrito
let eliminar = document.getElementById("eliminar_carrito");
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
}else{
    let div = document.createElement("div");
    div.innerHTML = "Carrito vacio";
    document.body.append(div);
}


eliminar.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
    alert("carrito eliminado")
}); 

