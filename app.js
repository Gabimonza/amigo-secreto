// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "" ){
        alert("Ingrese un nombre");
        console.log("no se ingreso nombre");
        return;
    }
    
    amigos.push(nombre);
    input.value= "" ;

    let contador = amigos.length - 1; 
    console.log(`Amigo agregado:${amigos[contador]}`); 

    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML="";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        lista.textContent = amigos;
        lista.appendChild(li);
    });
    
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("La lista esta vacia. Agregue nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSorteado} <li>`;
}