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
    if(nivelHambre >=100){
       nivelHambre = 100;
       console.log(`¡${nombreMascota} está muy lleno !: ${nivelHambre}`);
    }else if (nivelHambre <0){
        nivelHambre = 0;
        console.log(`¡${nombreMascota} está muy hambriento! Hambre: ${nivelHambre}`);
    }
    console.log(`¡Ñam! El hambre de ${nombreMascota}  ha disminuido. Hambre: ${nivelHambre}`);
}

const jugar = (puntosDiversion) =>{
    nivelFelicidad += puntosDiversion;
    if (nivelFelicidad >99){
        nivelFelicidad = 100;
        console.log(`¡${nombreMascota} está muy feliz! Felicidad: ${nivelFelicidad}`);
    }else if (nivelFelicidad <0){
        nivelFelicidad = 0;
        console.log(`¡${nombreMascota} está muy triste! Felicidad: ${nivelFelicidad}`);
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
    }
    if (nivelHambre >100){
        nivelHambre = 100;
        console.log(`¡${nombreMascota} está muy hambriento! Hambre: ${nivelHambre}`);
        
    }
    if  (nivelFelicidad <0){
        nivelFelicidad = 0;
        console.log(`¡${nombreMascota} está muy triste! Felicidad: ${nivelFelicidad}`);
        
    
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
            console.log(`Tu mascota  ${nombreMascota}está muy feliz y juguetona.`);
            break;
        case (nivelFelicidad >= 40):
            console.log(` Tu mascota ${nombreMascota} está contenta`);
            break;
        default:
            console.log(`Tu mascota ${nombreMascota} se siente un poco triste`);
    }
}

//simularPasoDelTiempo();
//diagnosticoMascota();

function iniciarCuidado(){
    while (true){
        let menu = prompt("Menú de cuidado de mascota: \n 1. Alimentar a la mascota  \n 2. Jugar con la mascota \n 3. Simular el paso del tiempo \n 4. Ver diagnostico de la mascota \n 5. Mostrar estado actual \n 6. Despedirse de la mascota");

        switch (menu){
            case "1":
                let puntosComida = parseInt(prompt("¿Cuántos puntos de comida quieres darle a tu mascota?"));
                alimentar(puntosComida);
                break;
            case "2":
                let puntosDiversion = parseInt(prompt("¿Cuántos puntos de diversión quieres darle a tu mascota?"));
                jugar(puntosDiversion);
                break;
            case "3":
                simularPasoDelTiempo();
                break;  
            case "4":
                diagnosticoMascota();
                break;            
            case "5":
                mostrarEstado();
                break;
            case "6":   
                console.log(`¡Adiós! Cuida bien a ${nombreMascota}.`);    
                return;
            default:
                console.log("Opción no válida. Por favor, elige una opción del 1 al 6.");
                break;
        }     
    }
}

iniciarCuidado();