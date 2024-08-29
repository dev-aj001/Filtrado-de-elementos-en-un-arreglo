// Filtrado de elementos en un arreglo:
// Crea un arreglo de números y filtra los elementos para mostrar solo aquellos que sean mayores que un valor dado por el usuario

const readline = require('readline');

// Interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [5, 12, 8, 130, 44];

rl.question('Ingrese un numero para filtrar: ', (filtro) => {
    let numerosFiltrados = numeros.filter(function (numero) {
        return numero > filtro;
    });
    
    // Mostrar los elementos filtrados
    console.log('Números mayores que ' + filtro + ': ' + numerosFiltrados);
    
    rl.close();
});

