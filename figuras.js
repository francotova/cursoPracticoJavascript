//Código del cuadrado
//Agrupo sentencias en la consola del navegador.
console.group("Cuadrados");
// Creo una variable con la palabra reservada "const" porque no se modificará.
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado son de "+ ladoCuadrado +" centímetros.");


//const perimetroCuadrado = ladoCuadrado*4;
//console.log("El perímetro del cuadrado es de "+ perimetroCuadrado +" centímetros.");
//En función
function perimetroCuadrado(lado){
    return lado * 4;
}

//const areaCuadrdado = ladoCuadrado*ladoCuadrado;
//console.log("El área del cuadrado es de "+ areaCuadrdado +" centímetros cuadrados.");
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();


//Código del triángulo
console.group("Triángulos");
//const ladoTriangulo1 = 5;
//const ladoTriangulo2 = 5;
//const baseTriangulo = 4;


//console.log("Los lados del triángulo son de "
//+ ladoTriangulo1 
//+ ", "
//+ ladoTriangulo2
//+ " y la base es: "
//+ baseTriangulo 
//+ " centrímetros.");

// Necesitamos una altura para calcular el área, la agregamos.
//const alturaTriangulo = 6.1;

//console.log("La altura del triángulo es de: " + alturaTriangulo + " cm.");

//Perímetro del triángulo
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perímetro del triángulo es: "+ perimetroTriangulo + " cm.");

//Área
//const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
//console.log("El área del triángulo es: "+ areaTriangulo + " cm2.")
console.groupEnd();



// Círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("Radio círculo: "+ radioCirculo + " cm.")
// Diámetro
//const diametroCirculo = radioCirculo*2;
//console.log("El diámetro: "+ diametroCirculo + " cm.")
function diametroCirculo(radio){
    return radio * 2;
};
// PI
//Math es una herramienta que se usa en el navegador.
const PI = Math.PI;
console.log("PI es: "+ PI + " cm.")
// Circunferencia
//const perimetroCirculo = diametroCirculo*PI;
//console.log("El perimetro: "+ perimetroCirculo + " cm.")


// Área
function areaCirculo(radio){
    var diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El area: "+ areaCirculo + " cm2.")
console.groupEnd();




// Aquí interactuamos con el HTML
//Javascript permite leer el contenido HTML, como también editarlas. --> document.getElementById("id etiqueta");
function calcularPerimetroCuadrado() {
    //obtengo la etiqueta
    const input = document.getElementById("areacuadrado");
    //tomo el valor de la misma
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);

    //creamos una alerta para que muestre el perimetro edl cuadrado.
    alert(perimetro); 
}

function calcularAreaCuadrado() {
    //obtengo la etiqueta
    const input = document.getElementById("areacuadrado");
    //tomo el valor de la misma
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}