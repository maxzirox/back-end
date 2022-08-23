//IMPORTAMOS LA LIBRERIA FS
const fs = require('fs');
let fecha = new Date();
//se asigna el texto atravez del metodo readFileSync de fs a data
console.log('inicio del programa')
try{
    fs.readFile('./fileSystem.txt', 'utf-8', (error, contenido) =>{
        if(error){
            console.log(error)
        }else{
            console.log(contenido)
        }
    });
    console.log('otra instruccion')
} catch(error){
    console.log('error')
}

console.log('fin del programa')
