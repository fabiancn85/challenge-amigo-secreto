//juego amigo secreto
const ingresoAmigo = document.getElementById("amigo");
// listaAmigos se usa para almacenar(guardar) la lista de amigos
const listaAmigos = [];
// listaDeAmigox se usa para mostrar la lista de amigos en el HTML
const listaUl = document.getElementById("listaAmigos");
// resultadoUl se usa para mostrar el resultado del sorteo en el HTML
const resultadoUl = document.getElementById("resultado");
function agregarAmigo(){
    //si el usurio, no ingresou un valor en ingresoAmigo, se muestra un alert
    if(!ingresoAmigo.value.trim()){
        alert("¡Debes ingresar un nombre,solo puedes agregar 6 amigos!");
        ingresoAmigo.value = ''; // Limpiar el campo de entrada de usuario
        return;
    }
    // Verificar si el nombre ya existe en la lista
    if (listaAmigos.includes(ingresoAmigo.value.trim())) {
        alert("¡El nombre ya está en la lista!");
        ingresoAmigo.value = ''; // Limpiar el campo de entrada
        return; 
    }
    // Verificar si la lista de amigos ya tiene 6 amigos
    if (listaAmigos.length >= 6) {
        alert("¡Solo puedes ingresar 6 amigos!");
        //limpia el campo de entrada de usuario
        ingresoAmigo.value = " ";
        return;
    }
    listaAmigos.push(ingresoAmigo.value.trim()); 
    //listaUl.innerHTML += `<li> * ${ingresoAmigo.value.trim()}</li>`; //esta es otra opcion que muestra en html en nombre ingresado en la lista,sin usar la funcion mostraramigos().
    //limpia el campo de la ultima tentativa al superar los 6 intentos
    mostrarAmigos(); // Llamar a la función para mostrar la lista de amigos
    ingresoAmigo.value = " ";
}
function mostrarAmigos(){
    listaUl.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos nombres
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = `* ${listaAmigos[i]} *`;//muestra en html en nombre ingresado
        listaUl.appendChild(li); 
    }
}
function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("¡Debes ingresar 6 amigos antes de realizar el sorteo!");
        return;
    }
    if(listaAmigos.length < 6){
        alert("¡Debes ingresar 6 amigos antes de realizar el sorteo!");
        return;
    }
     const amigoRandom =Math.floor((Math.random() * listaAmigos.length));
     console.log (amigoRandom);
     const amigoSecreto = listaAmigos[amigoRandom];
     resultadoUl.innerHTML = `<li> El amigo secreto es : ¡ ${amigoSecreto} ! </li>`;
}