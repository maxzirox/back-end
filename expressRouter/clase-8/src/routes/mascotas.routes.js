const express = require('express');
const routerMascotas = express.Router();

const DB_MASCOTA = [
    {
        nombre: 'kakaroto',
        raza: 'gato',
        edad: 2
    }
];

routerMascotas.post('/', (req, res) =>{
    const {nombre, raza, edad} = req.body;
    console.log('obj', {nombre, raza, edad});

    DB_MASCOTA.push(req.body);
    res.status(201).json({code: 201, msg: `mascota ${nombre} agregado con exito`});
});

routerMascotas.get('/', (req, res) =>{
    res.status(200).json(DB_MASCOTA);
});

module.exports = routerMascotas;