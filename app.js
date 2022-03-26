var NumeroAcceso1 = (369);
var NumeroAcceso2 = (246);
var NumeroAcceso3 = (167);

function Ejecutar(miAcceso){
    if (isNaN(miAcceso)){
        return miAcceso = prompt('Ingresa tu numero de acceso')
    } else if (miAcceso == NumeroAcceso1){
        console.log('Bienvenida Maria')
    } else if (miAcceso == NumeroAcceso2){
        console.log('Bienvenido Luis')
    } else if (miAcceso == NumeroAcceso3){
        console.log('Bienvenido Rodrigo')
    } else if (miAcceso != NumeroAcceso1 && miAcceso != NumeroAcceso2 && miAcceso != NumeroAcceso3){
        console.log('Intruso!!')
    }
}

let accessNumber = Ejecutar(prompt('Ingresa tu numero de acceso'))