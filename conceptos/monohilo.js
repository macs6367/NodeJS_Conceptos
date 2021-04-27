console.log('Primera instruccion');

let i = 0; 
setInterval(() => {
    console.log('Sigo activo ' + i);
    i++;
}, 1000);

console.log('Segunda instruccion');