//importamos express con un require.
const express = require('express');
//incializamos express en la constante app
const app = express();
//asignamos el puerto a la constante PORT
const PORT = 8080;
//designamos una frase
const frase = 'Hola maricas'
//obtenemos 
app.get('/api/frase', (req, res) =>{
    res.status(200).send(frase);
})

app.get('/letras/:num', (req, res) =>{
    const num = req.params.num;
    if(isNaN(num)){
        res.status(400).send({error: 'el parametro ingresado no es un numero'});
    }
    if(num < 1 || num > frase.length){
        return res.status(400).send({error: 'el parametro esta fuera de rango'});
    }

    res.status(200).send(frase[num -1])
    res.render
})

app.get('/palabras/:num', (req, res) =>{
    const num = req.params.num;
    if(isNaN(num)){
        res.status(400).send({error: 'el parametro ingresado no es un numero'});
    }
    const palabras = frase.split(' ');
    if(num < 1 || num > palabras.length){
        return res.status(400).send({error: 'el parametro esta fuera de rango'});
    }

    res.status(200).send(palabras[num -1])
})

app.get('*', (req, res) =>{
    res.status(404).json({
        code: 404,
        msg: 'not found'
    })
})

const server = app.listen(PORT, ()=>{
    console.log(`servidor alojado en express escuchando el puerto: ${server.address().port}`)
})

server.on('error', err => console.log(`error eb el servidor ${err}`))