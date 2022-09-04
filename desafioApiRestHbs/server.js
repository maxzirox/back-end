const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const routerProductos = require('./src/routes/productos.routes.js');
const path = require('path');

const app = express();

app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: __dirname + '/views/partials'
})
);

const PORT = 8080;
//middleware se configura para que express pueda recibir json
app.use(express.json());
//morgan se ejecuta durante los usos de las rutas
app.use(morgan('dev'));
//middleware para recibir parametros desde un formulario
app.use(express.urlencoded({ extended: true}));
//middleware para visualizar un index.html dentro de public
app.use(express.static(path.join(__dirname + '/public')));
//establecemos el motor de plantillas
app.set('view engine', 'hbs');
//establecemos directorio donde se encuentran los archivos de plantilla
app.set('views', path.join(__dirname, 'views'));

app.use('/api/productos', routerProductos);



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