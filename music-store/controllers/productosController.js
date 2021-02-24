const express = require ('express');

const controlador = {
home: (req,res) => {
    res.render('home');
},

guitarradetalle: (req,res) => {
    res.render('productos/guitarraDetail');
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

productoNuevo: (req,res)=>{
    let productoNuevo = {
      producto: req.body.producto,
      tipousuario: req.body.tipousuario,
      precio: req.body.precio,
      tamañoProducto: req.body.tamañoProducto,
      cantidad: req.body.cantidad,
      foto: req.body.foto
    }   
     res.send(productoNuevo);
}

};

module.exports = controlador;