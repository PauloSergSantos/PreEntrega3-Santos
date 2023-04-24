function saludo(saludo, querido, usuario){
    let mensaje = `${saludo} ${querido} ${usuario}`;
    alert(mensaje);
}

saludo("Hola", "querido", "usuario");
saludo("Bienvenido", "a mi tienda", " ");



let edad = prompt("Ingrese su edad");

if(edad < 12){
    alert("No podes igresar a esta pagina");
}else if(edad < 18){
    alert("Podes ingresar bajo la supervision de un adulto");
}else{
    alert("Podes ingresar a esta pagina");
} 



for(let numeroFila = 1; numeroFila <= 10; numeroFila++){
    let nombre = prompt("Ingrese su nombre");
    alert(`Numero de fila ${numeroFila} nombre: ${nombre}`);
}
