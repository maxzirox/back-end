const fs = require('fs');
//metodo antiguo
function leerTC(){
    fs.promises.readFile('./fileSystem.txt', 'utf-8')
    .then( respuesta => {
        console.log(respuesta);
    })
    .catch( error => {
        console.log('error de lectura! ',error);
    })
}

leerTC();

async function leerAA(){
    try{
        const contenido = await fs.promises.readFile('./fileSystem.txt', 'utf-8');
        console.log(contenido)
    }
    catch(error){
        console.log('error de lectura', error);
    }
}

leerAA();

//metodo moderno

async function escribir(){
    try{
        await fs.promises.appendFile('./fileSystem.txt', 'Reemplazo de prueba');
        console.log('agregado con exito!');
    }
    catch(error){
        console.log('hubo un error de escritura! ', error);
    }
}

escribir();