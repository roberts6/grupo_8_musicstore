const express = require ('express');

const controlador = {
home: (req,res) => {
    res.render('home');
},

guitarradetalle: (req,res) => {
    res.render('guitarraDetail');
},

bajosdetalle: (req,res) => {
    res.render('bajosDetail');
},

bateriasdetalle: (req,res) => {
    res.render('bateriasDetail');
},

login: (req,res) => {
    res.render('login');
},

audio: (req,res)=>{
 res.render('audio');
},

cargaProducto: (req,res) =>{
    res.render('cargaProductos');
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