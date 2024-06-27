
//variables es como un recipiente que dentro  se guarda algo que se puede variar 
recipiente = "papel"
// tipos de datos: string (cadena de texto), number, boolean, 
String = "cadena de texto"
Number = 19
Boolean = true o false

// casos especiales de Dtos: undefined, Null, Nun
//tipos de variables (let, var y const)

let numero;
    numero = 3; 
    
// multiples variables (separandolas con coma) -> let nombre1 = "jorge", nombre2 = "carlos"    
    
let numero, numero2, numero3;
alert(numero);
alert(numero2);
alert(numero3);
// otro ejemplo de separar variables con coma
let numero1 = 23, nunmero2 =39;
// otro ejemplo de serparar variables y es mas identado 
let numero1 =29;
let numero2 = 93;

 // nul es si  tiene valor pero esta vacia no va tener nada es como nulo.
let numero = null;
 //undefained es: temporalmnete no tiene valor mas adelante se se le da  el definido. 
 // NaN: no es un niumero no es un dato que se concuerde como sumar texto con numero no va dar.
let numero = 5;
let numero2 = "datlo";

alert(numero + numero2) // va votar error Nan ya que no se puede.


// pruebas con prompt 
let nonmbre = prompt(" dime tu nombre");
alert(nonmbre)

let nombre = prompt("dime tu nombre";
alert("hola " + nombre);

// OPERADOFRES EN JAVASCRIPT:
// OPERADORES DE ASIGNACION: ASIGNA UN VALOR OPERANDOI DE LA IZQUIERDA BASADO EN EL VALOR OPERANDO DE LKA DERECHA.
let numero = 5;
numero += 5;
document.write(numero);

let numero = 5;
numero *= 5;
document.write(numero);

let numero = 5;
numero -= 5 ;
document.write(numero);

let numero = 5;
numero /= 5 
document.write(numero);

let numero = 5;
numero %= 5 
document.write(numero)

// OPERADORES ARITMETICOS: TOMAQN VALORES NUMERICOS (LIETRALES O VARIABLES) COMO SUS OPEREANDOS Y RETOMAN UN VALOR NUMERICO UNICO.

numero1 = 10;
numero2 = 5;
resultado = numero1**numero2;

alert(resultado)

//CONCATENACION: unir string ejemplo 
saludo = "hola pedro";
pregunta = " ¿como estas?";

frase = saludo + pregunta;

document.write(frase);
// otro ejemplo: de forzar string 

numero1 = 5;
numero2 = 8;

frase = "" + numero1 + numero 2;

document.write(frase);
// otro ejemplo es ${}

nombre = "lucas dalto";

frase = `soy ${nombre} y estoy caminado`;

document.write(frase);

//OPERADORES (INTERMEDIO)

//- OPERADORES LOGICOS: nos devuelven un resultado a partir de que se cumpla o no una condicion, su resultado es booleano, y sus operandos son valores logicos o asimilables a ellos. (true o false)

let valor = true;
let valor2 = true;

let resultado = valor && valor2;// preguntando si los dos valores son verdaderos o falsos. si uno es flaso nos dedvuleve falso si los dos son verdaderos nos devuelve true. 

let resultado2 = valor || valor2;// preguntando con una que sea vedadero nos va devolver true

let resultado3 = !valor;// dando vuelta al resultado si es verdadero te la cambia a falso y si es falso te la cambia a verdadero.

document.write(resultado)// nos arrojara true ya que los dos valores son verdaderos
document.write(resultado2)// 
document.write(resultado3)

// ejemplos con uno de ellos 
numero1 = 12;
numero2 = 24;
afirmacion1 = numero1 > numero2;
afirmacion2= numero1 == numero2;
document.write(afirmacion1 || afirmacion2)//va arrojar falso ya que 12 no es mayor que 24 y 12 no es igual a 24 

//OPERADORES DE COMPARACION: los operadores de comparacion compoarn dos expresiones y devuelven un valor Bollena que representa ña relacion de sus vañlores: ejemplos
// equility botan false o true

let numero = 23;
let numero2 =23;
document.write(numero ==numero2);// arrojara true ya que los valores son iguales.
// ejemplo con enaquility: es preguntar si son distintos los valores. 
let numero = 23;
let numero1 = 13;
let texto = "texto 1";
let texto2 = "texto 2";
document.write(texto != texto2);
// ejemplo con identify: comoarar por igual o identicos.  
let numero = 23;
let numero1 = 13;
let texto = "texto 1";
let texto2 = "texto 2";
document.write(texto == numero);// con dos iguales dice true porque el dato es un texto y contiene un numero.  
let numero = 23;
let numero1 = 13;
let texto = "texto 1";
let texto2 = "texto 2";
document.write(texto === numero);// nos arroja falso porque el dato es texto y el valor es numero con 3 iguales tiene que ser excactamnte iguales

// ECUACIONES DE MAYORES Y MENORES 
//OREGUNTAR SI ES MAYOR O IGUL O MENOR Y IGUAL. 
let numero = 23;
let numero2 = 15;
document.write(numero >=numero2)// >= preguntando si 23 es mayor o igual a 15 nos rroja false o true. 

let numero = 23;
let numero2 = 15;

let resultado = numero > numero2; // para almacenar los datos y repuestas
document.write(numero > numero2)// > sin el gual solo se esta preguntando si es mayor a 15
document.write(resultado) // es otra manera de dar ejecucion. almacenado el resultado 

//camel case: se realiza escribiendo pabrasla primera letra en mayuscula
//ejemplo
decimeAlgoPorFavor;







