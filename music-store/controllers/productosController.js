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
}
};

module.exports = controlador;