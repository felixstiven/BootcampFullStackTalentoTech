// array es una variable donde dentro puede contener cualquier cosa;se llama (elementos) y guardarlo 

// let array = ["lucas",24, "buenos aires"];

// ejemplo una variable array llamado frutas

// let frutas = ["banana","pera","mango","fresa", 5,9,"pedro"];

//document.write(frutas[1]); // estamos diciendo que nos muestre el primer elemento que en programacion seria pera.












//ARRAYS ASOCIATIVOS: SEW DEBE LLAMAR POR SU NOMBRE O COSA PARA PODER LLAMARLO DIFERNTE Y SIN POSICIONAMIENTO. 

// let pc1 = {
//     nombre: "Hp Portatil",
//     procesador: "Inte Core",
//     ram: "16GB",
//     espacio:"1TB"
// };

//document.write(pc1[nombre]);

// otra forma del array asociatuivo y mas ordenado para llamrlo y crear frase es: con el ejemplo que inicia de la linea 13 

// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let espacio = pc1["1TB"];

// frase = `el nombre de mi pc es: <b>${nombre}</b> <br>
//         el procesador es: <b>${procesador}</b> <br>
//         la memoria es: <b>${ram}</b> <br>
//         el espacio es: <b>${espacio}</b>`;

//document.write(frase);











//BUCLES E ITERACION: 
//if: si cumple con una funcion ejecutara lo que halla dentro de esa caja
// let numer = 0;
// if (numer < 10);
//document.write("es menor que 10");// como 0 si es menor que 10 ejecuta es menor que 10

//otro ejemplo sumando numero
//let numera = 0;

//if (numera < 10){
    //numero++; // si se cumple le sumara uno a la respuesta 
    //numero++;// si se cumple le sumara dos a la respuesta
    //document.write(numero)
//}


// while: es un bucle donde pregunta y si es lo ejecuta y lo seguira preguntando infinito.

//let numero = 0;

//while (numero < 7){
    //numero++;
    
   // document.write(numero)
//}

// ejemplo while con br para dar resultado en lista

//let numero = 0;

//while (numero < 7){
    //numero++;
    
   // document.write(numero + "<br>")
//}

//  do while: es primero ejecuta y depues pregunta
//ejemplo con el mismo de la linea 76

//let numero = 0;



//do{
    
    //document.write(numero + "<br>");
   // numero++;
//}
//while (numero < 6)

//SENTENCIA BREAK: termina la sentencia: ejemplo

//let numero = 0;

//while(numero <100){
   // numero++;
    //document.write(numero);      // el break es para terminar el bluque. en 10 bluques
    //if(numero ==10){
        //break;
    //}

//}
//document.write("fin") // termina el bluque y continua ejecutando el programma muestra fin al final 









// for, cpntinue, for in, for of. 

//for: es casi igual que el bucle pero es un bucle determinado es para ejecutarse las veces que nosotros le indiquemos.
// declaramo e inicializamos, condicion y depues iteramos:





//FUNCIONES: es una porcion de codigo, debe ser funcion parar cada actividad y se quiere repetir solo es con el nombre de la funcion. las funciones las creamos y depues las llamamos.   ejemplos de funcion y funcion con return.



// function saludar(){ 
    // respuesta = prompt("hola lucas ¿como fue tu dia?");
    // if (respuesta == "bien"){
        // alert("me alegro")
    // } else {
    // alert("una pena")
    // }
// }

// saludar()

//FUNTION CON RETURN: cuando ejecuta va retornar una respuesta y termina la ecucion del bloque:

// function saludar(){
    // alert("hola")
    // return "se ejecuto correctamente"
// }
// let saludo = saludar();
// document.write(saludo)



//FUCTION DE PARAMETROS: 

// function saludar(nombre){
//     let frase = `!hola ${nombre}! ¿como estas'`;
//     document.write(frase)
// }

// saludar("pedro")



// otra manera de realizar creando una variable con una funcion dentro

// const saludar = function(nombre){
//     let frase = `! hola ${nombre}! ¿como estas?`;
//     document.write(frase)
// }
// saludar("pedro")

// la fuction con flecha es simplemente cambiar la palabra fuction por => pero iria adelnate de valor de la variable.   ejemplo

// const saludar = (nombre)=>{
//     let frase = `! hola ${nombre}! ¿como estas?`;
//     document.write(frase)
// }
// saludar("pedro")

// resumiendo codigo con fuction flecha:


// const saludar = (nombre) =>{
//     document.write("¿hols como estas?" + nombre);
// }
// saludar("pedro")










