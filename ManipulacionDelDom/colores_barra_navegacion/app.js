// input cambio de numero colores
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");
// texto-parrafos
const textRojo = document.getElementById("texto-rojo");
const textVerde = document.getElementById("texto-verde");
const textAzul = document.getElementById("texto-azul");
// contenedores de cada color 
const contenedorRojo = document.querySelector('.color-rojo');
const contenedorVerde = document.querySelector('.color-verde');
const contenedorAzul = document.querySelector('.color-azul');




// obteniendo el valor de los inputs
let rangoRojo = inputRojo.value;
let rangoVerde = inputVerde.value;
let rangoAzul = inputAzul.value;
// cambiando el texto segun numero de rgba
textRojo.innerText = rangoRojo;
textVerde.innerText = rangoVerde;
textAzul.innerText = rangoAzul;


// funcion de cambio de color()

function actualizarColor(rojo, verde, azul){
    const  colorRgb = `rgb(${rojo}, ${verde},${azul})`;

    if(rojo != undefined){
        contenedorRojo.style.backgroundColor=`rgb(${rojo}, 2, 2)`
    }
    if(verde != undefined){
        contenedorVerde.style.backgroundColor=`rgb(2, ${verde}, 2)`
    }
     if(azul != undefined){
        contenedorAzul.style.backgroundColor=`rgb(2, 2, ${azul})`
    }

    document.body.style.backgroundColor = colorRgb;
}


// escuchadores de los inputs cambio del rojo
inputRojo.addEventListener("change", (e) => {
    rangoRojo = e.target.value;
    textRojo.innerText = rangoRojo;
    actualizarColor(rangoRojo, rangoVerde, rangoAzul);
});


// escuchadores de los inputs cambio del verde
inputVerde.addEventListener("change", (e) => {
    rangoVerde = e.target.value;
    textVerde.innerText = rangoVerde;
    actualizarColor(rangoRojo, rangoVerde, rangoAzul);
});

// escuchadores de los inputs cambio del azul
inputAzul.addEventListener("change", (e) => {
    rangoAzul = e.target.value;
    textAzul.innerText = rangoAzul;
    actualizarColor(rangoRojo, rangoVerde, rangoAzul);
})

