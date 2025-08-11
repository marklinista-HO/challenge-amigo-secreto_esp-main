// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

console.log("Es una preba de consola") ;


let largoDelista = 0 ;
let listaNombres = [] ;
let nombreLeido = "" ;

largoDelista = listaNombres.length ;


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

    alert(`oprimió Sortear amigo`);

}



largoDelista = listaNombres.length ;

console.log(`largoDelista ${largoDelista}`) ;
console.log(listaNombres) ;

alert(`hola a ver que sale:  ${listaNombres}`);
