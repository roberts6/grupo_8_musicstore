const express = require("express");
const app = express();
const path = require('path');
const routes = require('./routes/index');

app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/detalle', routes);

const publicPath = path.resolve(__dirname, "/music-store");

app.listen(3000, () => console.log("Funcionando en el puerto 3000"));