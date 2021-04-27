const saludo = (nombre, miCallback) => {
    setTimeout(() => {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1500);
   }
   
const hablar = (callbackHablar) => {
    setTimeout(() => {
        console.log('bla bla bla');
        callbackHablar();
    },1000);
}

const conversar = (nombre, veces, callback) => {
    if(veces >= 0){
        hablar(() => {
            conversar (nombre, --veces, callback);
        })
    }else{
        despedida (nombre, callback)
    }
}

const despedida = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}
   
console.log('Inicia proceso ...');
saludo('Miguel', (nombre) => {
    conversar(nombre, 5, () => {
        console.log('Termina proceso...');
    })
});
   