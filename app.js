// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let largoDeLista = 0 ;
let listaNombres = [] ;
let nombreLeido = "" ;

let indiceSorteado = 0 ;

//  limpia en contenido de la casilla amigo
function limpiarTexto() {
    document.querySelector('#amigo').value = '';
}

//  función accionada por el botón "Añadir"
//  Agregar nombre de amigo a la lista
function agregarAmigo() {

    // Lee nombre de amigo
    nombreLeido = document.getElementById('amigo').value;

    //  Revisa si se ingresó nombre
    if (nombreLeido == "") {

        alert(`Por favor, inserte un nombre`);

    } else {

        //  Si se ingresó nombre, se agrega a la lista y se limpia la casilla
        listaNombres.push(nombreLeido);
        limpiarTexto() ;
    }

    //  Se actualiza el largo de la lista
    largoDeLista = listaNombres.length ;

    console.log(`largoDelista ${largoDeLista}`) ;
    console.log(listaNombres) ;

}

//  función para desactivar botones una vez haya sorteado


//  función accionada por el botón "Sortear amigo"
//  Agregar nombre de amigo a la lista
function sortearAmigo() {
 
    if (largoDeLista > 0 ) {

        //  Genera un número entero entre 0 y largoDeLista
        indiceSorteado=  Math.floor(Math.random()*largoDeLista);
    

        console.log(`indice sorteado = ${indiceSorteado} ${listaNombres[indiceSorteado]}`) ;

        // Desplegar nombre de amigo sorteado
        let elementoHTML = document.getElementById("resultado");
        elementoHTML.innerHTML = `Amigo secreto es: ${listaNombres[indiceSorteado]}`;

        // Desplegar nombre de amigo sorteado; prueba 2    
        //  document.getElementById("resultado").innerHTML = `Amigo secreto es: ${listaNombres[indiceSorteado]}`;

    } else {

        alert(`Atención!   No ha ingresado nombres `);
        
    }


}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



//  quitar !!!!!
console.log(`largoDelista ${largoDeLista}`) ;
console.log(listaNombres) ;


