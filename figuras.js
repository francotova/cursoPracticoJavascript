//Código del cuadrado
//Agrupo sentencias en la consola del navegador.
console.group("Cuadrados");
// Creo una variable con la palabra reservada "const" porque no se modificará.
const ladoCuadrado = 5;
console.log("Los lados del cuadrado son de "+ ladoCuadrado +" centímetros.");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perímetro del cuadrado es de "+ perimetroCuadrado +" centímetros.");

const areaCuadrdado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es de "+ areaCuadrdado +" centímetros cuadrados.");

console.groupEnd();


//Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 4;


console.log("Los lados del triángulo son de "
+ ladoTriangulo1 
+ ", "
+ ladoTriangulo2
+ " y la base es: "
+ baseTriangulo 
+ " centrímetros.");

// Necesitamos una altura para calcular el área, la agregamos.
const alturaTriangulo = 6.1;

console.log("La altura del triángulo es de: " + alturaTriangulo + " cm.");

//Perímetro del triángulo
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: "+ perimetroTriangulo + " cm.");

//Área
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del triángulo es: "+ areaTriangulo + " cm2.")
console.groupEnd();