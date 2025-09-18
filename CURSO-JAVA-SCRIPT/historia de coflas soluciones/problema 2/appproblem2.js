// HISTORIA DE COFLAS PARA DAR SOLUCION DE JAVA CRIPT: COFLAS   quiere un sistema para dejar pasar solo a los mayores de edad- la primer persona que entre despues de las 2 am, no paga.

let free = false;
const validarCliente = (time) => {
    let edad = prompt("¿cual es tu edad?");
    if (edad > 18){
        if(time >= 2 && time < 7 && free == false){
            alert("podes  pasar gratis porque sos la primera persona despues de las 2");
            free = true;
        } else {
            alert(`son las ${time}:00Hs y podes pasar. pero tenes que pagar la entrada`);
        }   
    }else{
        alert("mira papu, sos menor de edad por ende no vas a paser")
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.3);
validarCliente(1);
validarCliente(2);
