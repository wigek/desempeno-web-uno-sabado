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
       console.log(`¡${nombreMascota} está muy lleno !: ${nivelHambre}`);
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

/*alimentar(20);
jugar(30);
mostrarEstado();*/

const simularPasoDelTiempo=() =>{
    for(let i=1; i<5; i++){
        nivelHambre += 10;
        nivelFelicidad -= 5;
        if (nivelHambre >99){
            console.log(`¡${nombreMascota} está muy hambriento! Hambre: ${nivelHambre}`);
            nivelHambre = 0;
        }
        if (nivelFelicidad <0){
            console.log(`¡${nombreMascota} está muy triste! Felicidad: ${nivelFelicidad}`);
            nivelFelicidad = 0;
        }
    }
    console.log(`Han pasado algunas horas... Hambre: ${nivelHambre}, Felicidad: ${nivelFelicidad}`);
}

//simularPasoDelTiempo();

function diagnosticoMascota(){
    if (nivelHambre >= 80){
        console.log(`¡${nombreMascota} está muy hambriento! Debes alimentarlo.`);
    } else if (nivelHambre >= 50){
        console.log(`${nombreMascota} tiene algo de hambre. Considera alimentarlo pronto.`);
    } else {
        console.log(`${nombreMascota} está bien alimentado.`);
    }

    switch (nivelFelicidad){
        case (nivelFelicidad >= 80):
            console.log(`${nombreMascota} Tu mascota está muy feliz y juguetona.`);
            break;
        case (nivelFelicidad >= 40):
            console.log(`${nombreMascota} Tu mascota está contenta`);
            break;
        default:
            console.log(`${nombreMascota} Tu mascota se siente un poco triste`);
    }
}

//simularPasoDelTiempo();
//diagnosticoMascota();