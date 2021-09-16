alert ("Practicando clase JavaScript");
let nombre= prompt("Ingresa tu nombre");
let apellido= prompt("Ingresa tu apellido");
let lenguaje= prompt("Ingresa tu lenguaje de programación preferido");

console.log (nombre);
console.log (apellido);
console.log (lenguaje);

let numero1 = Number(prompt("ingresa tu numero"));
let numero2 = Number(prompt ("ingresa tu numero"));

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 / numero2);
console.log(numero1 * numero2);

//practicando condicionales: if

let unNumero = 10
if (unNumero == 10) {
    alert ("vas a ver este mensaje");
}
if (unNumero == 20) {
    alert ("no veras este mensaje");
}

let nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
alert("No ingresaste el nombre de usuario");
}
else {
alert("Nombre de usuario ingresado " + nombreUsuario);
}
// practicando en clase
let frio= true;
if (frio) {
    console.log ("debo abrigarme")
}

/*operadores comparacion
asignar =
igual ==
mayor >
menor<
mayor igual >=
menor igual <=
estracitamente igual ===
estricamente distinto !=
*/

let edad=prompt("que edad tenes?")
if (edad >18){
    console.log ("Puedes ingresar al recinto");
}else {
    console.log("sos Menor no puedes ingresar")
}

// contraseña
let cont = "willy"
let pass= prompt ("Ingrese su contraseña")
if(pass == cont){
    console.log ("Contraseña correcta");
} else {
    console.log ("Contraseña incorrecta");
}
if (pass==="elwilly") {
    console.log ("Eres el administrador");
}
