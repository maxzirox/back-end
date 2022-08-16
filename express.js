const express = require('express');

const app = express();
const port = 8080;

app.get('/', (request, response)=>{
    response.send('servidor iniciado con express!');
})
app.get('*', (request, response)=>{
    response.send('404 - not found!');
})
const server = app.listen(port, ()=>{
    console.log(`servidor alojado en express escuchando el puerto: ${port}`)
})