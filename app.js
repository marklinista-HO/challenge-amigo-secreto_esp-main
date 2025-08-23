// El principal objetivo de este desafío es fortalecer las habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//
// Programador: Mario Francisco Monzón Meza
// Grupo  G9-ONE

let largoDeLista = 0 ;
let amigos = [] ;
let nombreLeido = "" ;
let indiceSorteado = 0 ;

//  limpia en contenido de la casilla amigo
function limpiarTexto() {
    document.querySelector('#amigo').value = '';
}

// función para actualizar la lista de amigos que se despliega
function actualizaLista(){
  
    // Obtener el elemento con id 'listaAmigos' de rol lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Desplegar los nombres ya
    for (let i=0; i<largoDeLista; i++) {

        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];

        // Agregar elementos a la lista
        lista.appendChild(elemento);
        
    }
    
}


//  función accionada por el botón "Adicionar"
//  Agregar nombre de amigo a la lista
function agregarAmigo() {

    // Lee nombre de amigo
    nombreLeido = document.getElementById('amigo').value;

    //  Revisa si se ingresó nombre
    if (nombreLeido == "") {

        alert(`Por favor, inserte un nombre`);

    } else {

        //  Si se ingresó nombre, se agrega a la lista y se limpia la casilla
        amigos.push(nombreLeido);
        limpiarTexto() ;

        //  Se actualiza el largo de la lista
        largoDeLista = amigos.length ;
        
        //  Se despliega la lista actualizada
        actualizaLista() ;

    }
    
    console.log(`largoDelista ${largoDeLista}`) ;
    console.log(amigos) ;

}

//  función accionada por el botón "Sortear Amigo"
//  Agregar nombre de amigo a la lista
function sortearAmigo() {
 
    if (largoDeLista > 0 ) {

        //  Genera un número entero entre 0 y largoDeLista
        indiceSorteado=  Math.floor(Math.random()*largoDeLista);
  
        //Deshabilita el botón de añadir otro nombre
        document.querySelector('#adicionar').setAttribute('disabled','true');
        document.querySelector('#adicionar').innerHTML = 'deshabilitado';

        // Desplegar nombre de amigo sorteado
        let elementoHTML = document.getElementById("resultado");
        elementoHTML.innerHTML = `Amigo secreto es: ${amigos[indiceSorteado]}`;

        // Desplegar nombre de amigo sorteado; prueba 2    
        //  document.getElementById("resultado").innerHTML = `Amigo secreto es: ${amigos[indiceSorteado]}`;

    } else {

        alert(`Atención!   No ha ingresado nombres `);
        
    }

}

/* //  función que se usó de prueba

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
*/