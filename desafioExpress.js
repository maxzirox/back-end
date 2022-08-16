const express = require('express');
const Mensaje = require('./mensajeExpress')
const app = express();
const port = 8080;
const msg = new Mensaje();

app.get('/', (request, response)=>{
    response.send(msg.generarMensaje(1, 'red', 'Maxi'))
})
let vistas = 0;
app.get('/visitas', (request, response)=>{
    response.send(`la cantidad de vistas es: ${vistas++}`);
})
let fecha = new Date().toLocaleString();
app.get('/hyf', (request, response)=>{
    response.send(`la fecha es: ${fecha}`);
})
app.get('*', (request, response)=>{
    response.send('404 - not found!');
})
const server = app.listen(port, ()=>{
    console.log(`servidor alojado en express escuchando el puerto: ${port}`)
})