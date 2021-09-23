//COMPLEMENTARIO 4  
//PRIMERA FUNCION  Calculador IVA
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

//SEGUNDA FUNCION  Sumar precios
let pedirPrecios = parseInt(prompt('Por favor ingresa el precio del producto que desea adquirir, al finalizar tipee una letra'))

const sumarPrecios = (p) =>{
    const precios = [p]
    while(!isNaN(p)){
        p = parseInt(prompt('ingresa precios, al termina escribe una letra'))
        
        if(isNaN(p)){
            console.log(`Error`)
        }else{
            precios.push(p);
        }
    }

    let suma = precios.reduce((a,b) => a+b,0)

    
    return suma;
}
alert(sumarPrecios(pedirPrecios))

// TERCERA FUNCION  Calculador número multiplo
let divisor = parseInt(prompt('Por favor ingresa un número '))
let dividendo = parseInt(prompt('Por favor ingresa un segundo número'))

while(isNaN(divisor)){
    divisor = parseInt(prompt('ingresa un número valido'))
}
while(isNaN(dividendo)){
    dividendo = parseInt(prompt('ingresa un número valido'))
}

const esMultiplo = (num1, num2) =>{
    if(num1%num2 == 0){
        return 'Es multiplo';
    }else{
        return 'No es multiplo';
    } 
}

console.log(esMultiplo(divisor, dividendo))




