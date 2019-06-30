// alert, prompt o document.write//
// ALERT es un mensaje //
alert("BIENVENIDA A MI PRIMER WEB"); 
// PROMPT mensaje + llenado de información//
// DOCUMENT.WRITE me regresa algo escrito en la página pero ojo con lo ya hecho en css, queda insertado hasta el final de la pagina//

var name = prompt("¿Cómo te llamas?");

alert("Hola " + name); 
console.log("hola " + name);
 
//if si la condicion es VERDADERA, else si la condicion es FALSA. if anidado//
if (name.length <= 3) {
    console.log("qué nombre tan pequeño tienes!!");
} else if (name.length >=4 && name.length <=6) {
    console.log(name + " es un nombre largo");
} else if (name.length >= 7 && name.length <=10){
    console.log("muy muy largo");
} else {
    console.log("tu nombre es islandes?")
}

// switch es como if else//
