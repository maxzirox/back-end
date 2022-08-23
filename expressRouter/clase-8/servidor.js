const express = require('express');
const morgan = require('morgan');
const app = express();

const routerMascotas = require('./src/routes/mascotas.routes.js');
const routerPersonas = require('./src/routes/personas.routes.js');


const PORT = 8080;
//middleware se configura para que express pueda recibir json
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/mascota', routerMascotas);
app.use('/api/persona', routerPersonas);

app.get('*', (req, res) =>{
    res.status(404).json({
        code: 404,
        msg: 'not found'
    });
});



const server = app.listen(PORT, ()=>{
    console.log(`servidor alojado en express escuchando el puerto: ${server.address().port}`);
})

server.on('error', err => console.log(`error eb el servidor ${err}`));