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

}