//importamos express con un require.
const express = require('express');
//incializamos express en la constante app
const app = express();
//asignamos el puerto a la constante PORT
const PORT = 8080;
//designamos una frase
const frase = 'Hola maricas'
//middleware se configura para que express pueda recibir json
app.use(express.json());
//obtenemos 
const DB_USUARIOS = [
    {
        id: 1,
        name: 'maxziro',
        url: 'maxziro.com'
    }
];
//app.get es para definir una consulta a nuestra bd
app.get('/api/usuarios', (req, res) =>{
    res.status(200).json(DB_USUARIOS);
});
app.get('/api/usuarios/:id', (req, res) =>{
    try{
        const id = req.params.id;
        const indexObj = DB_USUARIOS.findIndex((o) => o.id == id);

        if(indexObj == -1){
            res.status(404).json({code: 404, msg: `usuario ${id} no ecnontrado`});
        }
        res.status(200).json(DB_USUARIOS[indexObj]);
    } catch(error){
        console.log(error);
        res.status(500).json({code: 500, msg: `error al obtener ${req.method} ${req.url}`});
    }

});
//app.post es para guardar informacion en nuestra bd
app.post('/api/usuarios', (req, res) =>{
    const {id, name, url} = req.body;
    console.log('obj', {id, name, url});

    DB_USUARIOS.push(req.body);
    res.status(201).json({code: 201, msg: `usuario ${name} agregado con exito`})
});

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