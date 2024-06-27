// crear mini-sistema que nos permita resgitrar los alumnos que estam presentes (p) y ausentes (a) en calse. 
// pasados lps 30 dias mostrar la situacion final de todos los alumnos (nr total de presentes y ausentes). 
// se puede tener un maximo de 10% de ausencia por semestre, si se tienen mas aclarar que esta reprobado.

let cantidad = prompt(" ¿cuantos alumnos son?");
let alumnosTotales = [];

for (i =0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "P" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for(i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}
for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    __________presentes: ${alumnosTotales[alumno][1]} <br>
    __________Ausencias: ${30 - alumnosTotales[alumno][1]}
    `;

    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= "REPROBADO POR INASISTENCIAS <br>";
    } else{
        resultado+="<br>"
    }
    document.write(resultado)
}