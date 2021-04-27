const saludo = (nombre, miCallback) => {
 setTimeout(() => {
     console.log('Hola, ' + nombre);
     miCallback(nombre);
 }, 1500);
}

const despedida = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Inicia proceso ...');
saludo('Miguel', (nombre) => {
    despedida(nombre, () => {
        console.log('Termina proceso...');
    })
});
