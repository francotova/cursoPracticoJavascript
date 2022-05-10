const lista1 = [
        100,
        400,
        //200,
        300333,
        200
];

const mitadLista1 = parseInt(lista1.length / 2);
//necesitamos dos elementos
// el promedio y la mediana

function esPar(numero) {
    
    //utilizamos el metodo % para ver si la division del numero entre 2
    //da resto. Por lo tanto sería inpar
    if (numero % 2 === 0){
        return true;
    } else { return false; }
}

function calcularMediaAritmetica(lista) 
{
    
    const sumaLista = lista.reduce(
        
        function (valorAcumulado = 0, nuevoElemento) {
           return valorAcumulado + nuevoElemento; 
        }

    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

let mediana;
if (esPar(lista1.length)) {
    //Al primer elemento le resto 1 ya que recordemos que el array empieza en 0.
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    //Utilizo la funcion de calcular promedio para los dos numeros de mediana.
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = parseInt(promedioElemento1y2);
}
else {
    //Necesitamos que la mitad de la lista sea un numero entero, para
    //ubicarlo en un array. Los índices son enteros.
    mediana = lista1[mitadLista1];
}

