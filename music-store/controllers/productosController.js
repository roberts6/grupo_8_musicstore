const express = require ('express');
const fs = require ('fs');

const controlador = {
home: (req,res) => {
    res.render('home');
},

guitarradetalle: (req,res) => {
    res.render('productos/guitarraDetail');
},

guitarradetallePorId: (req,res) => {
    let idProducto = req.params.id
    res.render('productos/req.params.id');
},

bajosdetalle: (req,res) => {

    res.render('productos/bajosDetail');
},

bateriasdetalle: (req,res) => {
    res.render('productos/bateriasDetail');
},

login: (req,res) => {
    res.render('user/login');
},

audio: (req,res)=>{
 res.render('productos/audio');
},

cargaProducto: (req,res) =>{
    res.render('productos/cargaProductos');
},

create: (req,res)=>{
    let productoNuevo = {
      producto: req.body.producto,
      marca: req.body.marca,
      tipousuario: req.body.tipousuario,
      precio: req.body.precio,
      tamañoProducto: req.body.tamañoProducto,
      cantidad: req.body.cantidad,
      foto: req.body.foto
    }   
    
   /* let leerProductoNuevoJson = fs.readFileSync ('productoNuevo.json',"utf-8");
    let productosNuevos = [];
    if (leerProductoNuevoJson == "") {
        leerProductoNuevoJson = [];
    } else {
         productosNuevos = JSON.parse (leerProductoNuevoJson);
    }
    
    leerProductoNuevoJson.push(productoNuevo);

    productosNuevos =JSON.stringify(leerProductoNuevoJson);

    fs.writeFileSync('leerProductonuevoJson',leerProductoNuevoJson) */

     res.send(productoNuevo); /* acá debería ir en realidad un res.redirect ('alguna página. Ej: vista del producto nuevo'); */
},

/* edit: (req,res)=> {
    let idProducto = req.params.idProducto;
    
    let productoNuevo = [{
        producto: req.body.producto,
      tipousuario: req.body.tipousuario,
      precio: req.body.precio,
      tamañoProducto: req.body.tamañoProducto,
      cantidad: req.body.cantidad,
      foto: req.body.foto
    }]
    
    let productoEdit = productoNuevo [idProducto];

    res.render('productoEdit', {productoEdit, productoEdit});
} */

};

module.exports = controlador;