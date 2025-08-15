// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

console.log("Es una preba de consola") ;


let largoDelista = 0 ;
let listaNombres = [] ;
let nombreLeido = "" ;

let indiceSorteado = 0 ;
largoDelista = listaNombres.length ;

indiceSorteado=  Math.floor(Math.random()*largoDelista)+1;



function limpiarTexto() {
    document.querySelector('#amigo').value = '';
}


function agregarAmigo() {

    // Lee nombre de amigo
    nombreLeido = document.getElementById('amigo').value;


    if (nombreLeido == "") {

        alert(`Por favor, inserte un nombre`);

    } else {
        listaNombres.push(nombreLeido);
        limpiarTexto() ;
    }

    
    largoDelista = listaNombres.length ;
    console.log(`largoDelista ${largoDelista}`) ;
    console.log(listaNombres) ;

}

function sortearAmigo() {
 
if (largoDelista > 0 ) {


    indiceSorteado=  Math.floor(Math.random()*largoDelista);
  
    alert(`oprimió Sortear amigo ${indiceSorteado} ${listaNombres[indiceSorteado]}`);
    console.log(`indice sorteado = ${indiceSorteado} ${listaNombres[indiceSorteado]}`) ;


//    asignarTextoElemento('ul','Juego del número ul');
//    asignarTextoElemento('il',`Indica un número il`);
} else {

    alert(`Atención!   No ha ingresado nombres `);

}


}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}






largoDelista = listaNombres.length ;

console.log(`largoDelista ${largoDelista}`) ;
console.log(listaNombres) ;

alert(`hola a ver que sale:  ${listaNombres}`);
