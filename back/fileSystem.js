//IMPORTAMOS LA LIBRERIA FS
const fs = require('fs');
let fecha = new Date();
//se asigna el texto atravez del metodo readFileSync de fs a data
const data = fs.readFileSync('./fileSystem.txt', 'utf-8');
try{
    console.log(data);
    //asobreescribimos un texto
    fs.writeFileSync('./fileSystem.txt', `texto agregado atravez de writeFileSystem el dia: ${fecha}`)
    //agregamos un texto
    fs.appendFileSync('./fileSystem.txt', 'texto agregado despues.');

    const data2 = fs.readFileSync('./fileSystem.txt', 'utf-8');
    console.log(data2)
}
catch(error){
    console.log("error: ", error)
}




//fileSystem ASYNC

