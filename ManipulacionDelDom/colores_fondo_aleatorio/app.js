
// Seleccionar los elementos del Dom

const boton = document.getElementById('boton-color');
console.log( boton);
const color = document.getElementById('color');
console.log(color)

function generarColorHexaAleatorio (){
    let digitos = '0123456789ABCDEF';
    let colorHexa = '#';

    for ( let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() *16);
        console.log(indiceAleatorio)
        colorHexa += digitos[indiceAleatorio];
       
    }
    console.log(colorHexa)
    return colorHexa;
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexaAleatorio();
    // cambiamos parrafo segun color a cambiar
    color.textContent = colorAleatorio;
    // cambiamos color del body
    document.body.style.backgroundColor = colorAleatorio;

})

generarColorHexaAleatorio();