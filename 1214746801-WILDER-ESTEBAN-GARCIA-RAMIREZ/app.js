const nombreMascota = prompt("Ingresa el nombre de tu mascota");
let nivelHambre= 50 ;
let nivelFelicidad= 50 ;

function mostrarEstado(){
    console.log(`El nivel de hambre de ${nombreMascota} es: ${nivelHambre}`);
    console.log(`El nivel de felicidad de ${nombreMascota} es: ${nivelFelicidad}`);
}

mostrarEstado();