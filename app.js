
//DESAFIO CLASE N° 4
var promedio = prompt ("Ingrese la nota de su último examen");
if (promedio >10) {
    alert ("Error, tienes que ingresar una nota  del 1 al 10");
}else {
    if (promedio <6) {
    alert ("Reprobaste, tienes que recuperar el módulo");
    } else {
    alert ("Felicitaciones, Aprobaste, continuamos en el próximo módulo");
    }
} 

// OTRO EJEMPLO CLASE 4

//por favor ingrese curso
let curso = prompt("Por favor ingresá el curso que desee entre: niños, adolescentes, adultos y a distancia");
switch (curso){
    case "niños":
        alert ("El curso para Niños está disponible, inicia el 01/10/2021");
        break;
    case "adolescentes":
        alert ("El curso para Adolescentes está disponible, inicia el 05/10/2021");
        break;
    case "adultos":
        alert ("El curso para Adultos está disponible, inicia el 05/10/2021");
        break;
    default:
        alert ("El curso a distancia no está disponible actualmente. Se incorporará a la brevedad");
        break;  
    }

//COMPLEMENTARIO 4  CALCULAR IVA
let numero = Number(prompt('Por favor ingrese el precio del libro de inglés de nuestro catálogo, que desea, sin IVA:'))
let iva = Number(prompt('Por favor ingrese el número 21, siendo el mismo el porcentaje de IVA del producto:'))

const calculadorIVA = (precio, porcentaje) => {
    let precioConIva;
    if(porcentaje < 10){
        precioConIva =  precio * Number(`1.0${porcentaje}`)
    }else{
        precioConIva =  precio * Number(`1.${porcentaje}`)
    }        
    return `El porcentaje del Iva: ${porcentaje}, de su libro seleccionado, de $${precio}, resulta un total a abonar de  $${precioConIva}`;
}
alert(calculadorIVA(numero, iva))

