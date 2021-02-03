const express = require("express");
const app = express();
const path = require("path");

app.use('/static', express.static(__dirname + '/public'));

const publicPath = path.resolve(__dirname, "./practicas-varias");

app.listen(3510, () => console.log("Funcionando en el puerto 3510"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "views/home.html")
    )});

app.get("/detalles", function(req, res){
    res.sendFile(path.join(__dirname, "views/productDetail.html")
    )});