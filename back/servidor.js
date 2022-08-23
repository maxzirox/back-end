const http = require('http');

const server = http.createServer((peticion, respuesta) => {
    
    switch (peticion.url){
        case '/':
            respuesta.end('hola mundo');
            break;
        default:
            break;
    }
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor http escuchando el puerto ${connectedServer.address().port}`)
})