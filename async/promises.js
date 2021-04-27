const saludo = (nombre) => {
    
    return new Promise ((resolve, reject) =>  {
        setTimeout(() => {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
    
}
   
const despedida = (nombre) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios, ' + nombre);
            resolve(nombre)
        }, 1000);
    });    
}
   
console.log('Inicia proceso ...');
saludo('Miguel')
    .then(despedida)
    .then((nombre)=> {
        console.log('Termina proceso');
    })
    .catch(error => {
        console.log('Error, ' + error);
    })