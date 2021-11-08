window.onload=() =>{
    let usuario=JSON.parse(localStorage.getItem("usuario"));
    console.log(usuario);
    document.getElementById("usuario").innerHTML="Hola "+usuario.nombre;
}