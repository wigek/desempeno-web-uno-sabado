const nombreMascota = prompt("Ingresa el nombre de tu mascota");
let nivelHambre= 50 ;
let nivelFelicidad= 50 ;

function mostrarEstado(){
    console.log(`El nivel de hambre de ${nombreMascota} es: ${nivelHambre}`);
    console.log(`El nivel de felicidad de ${nombreMascota} es: ${nivelFelicidad}`);
}

//mostrarEstado();

const alimentar = function(puntosComida){
    nivelHambre -= puntosComida;
    if(nivelHambre <1){
       nivelHambre = 0;
       console.log(`¡${nombreMascota} está hambriento, debes alimentarlo ${nivelHambre}`);
    }
    console.log(`¡Ñam! El hambre de ${nombreMascota}  ha disminuido. Hambre: ${nivelHambre}`);
}

const jugar = (puntosDiversion) =>{
    nivelFelicidad += puntosDiversion;
    if (nivelFelicidad >99){
        nivelFelicidad = 100;
        console.log(`¡${nombreMascota} está muy feliz! Felicidad: ${nivelFelicidad}`);
    }
    console.log(`¡Qué divertido! La felicidad de ${nombreMascota} ha aumentado. Felicidad:${nivelFelicidad}/100.`)
}


alimentar(20);
jugar(30);
mostrarEstado();