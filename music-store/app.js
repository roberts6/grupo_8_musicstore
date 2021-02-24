const express = require("express");
const app = express();
const path = require('path');
const routes = require('./routes/rutas');
const rutaProductos = require ('./routes/rutaProductos.js');
const rutaUsuarios = require ('./routes/rutaUsuarios.js')

app.use(express.static('./public')); /* todo lo que esté en la carpeta public será usado como un elemento static */
app.set('view engine', 'ejs'); /* configuración para poder usar la plantilla de ejs */

app.use(express.urlencoded({extended: false})); /* siempre que se use el method POST hay que configurar con esta linea y la de abajo a express para que me permita capturar la información puesta en los form */
app.use(express.json());

app.use('/', routes);
app.use('/productos', rutaProductos);
app.use('/user', rutaUsuarios);

const publicPath = path.resolve(__dirname, "/music-store");

app.listen(3000, () => console.log("Funcionando en el puerto 3000"));