const express = require('express');
const Mensaje = require('./mensajeExpress');
const Contenedor = require('./desafio-async-json.js');
const app = express();
const port = 8080;
const msg = new Mensaje();
const cnt = new Contenedor('./data.json');

app.get('/', (request, response)=>{
    response.send(msg.generarMensaje(1, 'red', 'Maxi'));
})
let vistas = 0;
app.get('/visitas', (request, response)=>{
    response.send(`la cantidad de vistas es: ${vistas++}`);
})
let fecha = new Date().toLocaleString();
app.get('/hyf', (request, response)=>{
    response.send(`la fecha es: ${fecha}`);
})
app.get('/productos', (request, response)=>{
    const prod = cnt.getAll()
    prod
    .then(all => response.send(all))
   
})
app.get('/random', (request, response)=>{
    const random = cnt.random()
    random
    .then(rand => response.send(rand));
})
app.get('*', (request, response)=>{
    response.send('404 - not found!');
})

const server = app.listen(port, ()=>{
    console.log(`servidor alojado en express escuchando el puerto: ${port}`)
})