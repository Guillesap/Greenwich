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

// contraseña
let cont = "willy"
let pass= prompt ("Ingrese su contraseña")
if(pass == cont){
    alert ("Contraseña correcta");
} else if (pass==="elwilly") {
    alert ("Eres el administrador");
} else {
    alert ("Contraseña incorrecta");
}

// edad

let edad=prompt("¿Que edad tenes?")
if (edad >18){
    alert ("Puedes ingresar en curso Adolescentes/Adultos");
}else {
    alert ("Puedes ingresar curso Niños")
}