// CLASE N° 1
alert ("Bienvenido a la página de Greenwich Inglés");
let nombre= prompt("Ingresa tu nombre");
let apellido= prompt("Ingresa tu apellido");
let conocimiento= prompt("¿Tienes conocimiento de ingles?");

console.log (nombre);
console.log (apellido);
console.log (conocimiento);

let nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
alert("No ingresaste el nombre de usuario");
}
else {
alert("Nombre de usuario ingresado " + nombreUsuario);
}

// CLASE N° 2 CONDICIONALES
let cont = "willy"
let pass= prompt ("Ingrese su contraseña")
if(pass == cont){
    alert ("Contraseña correcta");
} else if (pass==="elwilly") {
    alert ("Eres el administrador");
} else {
    alert ("Contraseña incorrecta");
}

// OTRO EJERCICIO CLASE N° 2 CONDICIONALES

let edad=prompt("¿Que edad tenes?")
if (edad >18){
    alert ("Puedes ingresar en curso Adolescentes/Adultos");
}else {
    alert ("Puedes ingresar curso Niños")
}

// EJERCICIO CLASE N° 3

let entrada = prompt ("Ingresa un nombre de Usuario para estudiar inglés");
while (entrada != "END" ) {
    switch (entrada) {
        case"maria":
            alert ("Bienvenida a Greenwich Maria");
            break;
        case"guillermo":
            alert ("Bienvenido a Greenwich Guillermo")
            break;
        default:
            alert ("¿ No tenemos tu registro, quien eres?")
            break;   
    }
    entrada = prompt ("Ingresa un nuevo usuario para estudiar inglés y para finalizar tipea END");
            alert ("Gracias por visitar nuestro site")
}

//OTRO EJERCICIO CLASE N° 3
let words = prompt('Introduce palabras en inglés que conozcas, cuando quieras terminar ingresa la palabra: END')

do{
    console.log(words);  
    words = prompt('Introduce palabras en inglés, cuando deseas terminar ingresa la palabra: END');  
}while(words !='END');
